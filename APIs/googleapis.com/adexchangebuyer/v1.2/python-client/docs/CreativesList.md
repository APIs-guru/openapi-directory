# CreativesList

The creatives feed lists the active creatives for the Ad Exchange buyer accounts that the user has access to. Each entry in the feed corresponds to a single creative.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[Creative]**](Creative.md) | A list of creatives. | [optional] 
**kind** | **str** | Resource type. | [optional] [default to 'adexchangebuyer#creativesList']
**next_page_token** | **str** | Continuation token used to page through creatives. To retrieve the next page of results, set the next request&#39;s \&quot;pageToken\&quot; value to this. | [optional] 

## Example

```python
from openapi_client.models.creatives_list import CreativesList

# TODO update the JSON string below
json = "{}"
# create an instance of CreativesList from a JSON string
creatives_list_instance = CreativesList.from_json(json)
# print the JSON string representation of the object
print(CreativesList.to_json())

# convert the object into a dict
creatives_list_dict = creatives_list_instance.to_dict()
# create an instance of CreativesList from a dict
creatives_list_from_dict = CreativesList.from_dict(creatives_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


