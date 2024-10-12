# ApplyingAttributesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**criticality** | **List[object]** |  | [optional] 
**environment** | **List[object]** |  | [optional] 
**lifecycle** | **List[object]** |  | [optional] 

## Example

```python
from openapi_client.models.applying_attributes_request import ApplyingAttributesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApplyingAttributesRequest from a JSON string
applying_attributes_request_instance = ApplyingAttributesRequest.from_json(json)
# print the JSON string representation of the object
print(ApplyingAttributesRequest.to_json())

# convert the object into a dict
applying_attributes_request_dict = applying_attributes_request_instance.to_dict()
# create an instance of ApplyingAttributesRequest from a dict
applying_attributes_request_from_dict = ApplyingAttributesRequest.from_dict(applying_attributes_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


