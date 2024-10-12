# Provider

A provider

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**analytics_id** | **str** | The id of the analytics page link to this addon | 
**can_upgrade** | **bool** | Can the addon be upgraded | [default to False]
**features** | [**List[Feature]**](Feature.md) |  | [optional] 
**google_plus_name** | **str** | The name of the google + page link to this addon (could be empty) | 
**id** | **str** | The id of the provider | 
**logo_url** | **str** | The url of the addon&#39;s logo | 
**long_desc** | **str** | A less concise description of the addon | 
**name** | **str** |  | 
**open_in_new_tab** | **bool** | Does the addon panel need to be open in a new tab | [default to False]
**plans** | [**List[Plan]**](Plan.md) |  | [optional] 
**regions** | **List[str]** | The differents regions where the addon is available | 
**short_desc** | **str** | A short description of the addon | 
**status** | **str** | The status of this addon (RELEASE, BETA, ...) | 
**support_email** | **str** | The mail to contact in case of issue with this addon | 
**twitter_name** | **str** | The name of the user to contact on twitter for this addon (could be empty) | 
**website** | **str** | The website of the provider. If the addon is developped by clever-cloud, the site is \&quot;http://www.clever-cloud.com/\&quot; | 

## Example

```python
from openapi_client.models.provider import Provider

# TODO update the JSON string below
json = "{}"
# create an instance of Provider from a JSON string
provider_instance = Provider.from_json(json)
# print the JSON string representation of the object
print(Provider.to_json())

# convert the object into a dict
provider_dict = provider_instance.to_dict()
# create an instance of Provider from a dict
provider_from_dict = Provider.from_dict(provider_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


