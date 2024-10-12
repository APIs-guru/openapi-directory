# AccessSelector

Specifies roles and/or permissions to analyze, to determine both the identities possessing them and the resources they control. If multiple values are specified, results will include identities and resources matching any of them. The total number of roles and permissions should be equal or less than 10.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**permissions** | **List[str]** | Optional. The permissions to appear in result. | [optional] 
**roles** | **List[str]** | Optional. The roles to appear in result. | [optional] 

## Example

```python
from openapi_client.models.access_selector import AccessSelector

# TODO update the JSON string below
json = "{}"
# create an instance of AccessSelector from a JSON string
access_selector_instance = AccessSelector.from_json(json)
# print the JSON string representation of the object
print(AccessSelector.to_json())

# convert the object into a dict
access_selector_dict = access_selector_instance.to_dict()
# create an instance of AccessSelector from a dict
access_selector_from_dict = AccessSelector.from_dict(access_selector_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


