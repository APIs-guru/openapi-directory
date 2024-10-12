# AccessLevel

An `AccessLevel` is a label that can be applied to requests to Google Cloud services, along with a list of requirements necessary for the label to be applied.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**basic** | [**BasicLevel**](BasicLevel.md) |  | [optional] 
**custom** | [**CustomLevel**](CustomLevel.md) |  | [optional] 
**description** | **str** | Description of the &#x60;AccessLevel&#x60; and its use. Does not affect behavior. | [optional] 
**name** | **str** | Resource name for the &#x60;AccessLevel&#x60;. Format: &#x60;accessPolicies/{access_policy}/accessLevels/{access_level}&#x60;. The &#x60;access_level&#x60; component must begin with a letter, followed by alphanumeric characters or &#x60;_&#x60;. Its maximum length is 50 characters. After you create an &#x60;AccessLevel&#x60;, you cannot change its &#x60;name&#x60;. | [optional] 
**title** | **str** | Human readable title. Must be unique within the Policy. | [optional] 

## Example

```python
from openapi_client.models.access_level import AccessLevel

# TODO update the JSON string below
json = "{}"
# create an instance of AccessLevel from a JSON string
access_level_instance = AccessLevel.from_json(json)
# print the JSON string representation of the object
print(AccessLevel.to_json())

# convert the object into a dict
access_level_dict = access_level_instance.to_dict()
# create an instance of AccessLevel from a dict
access_level_from_dict = AccessLevel.from_dict(access_level_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


