# AreaResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**areas** | [**List[Area]**](Area.md) |  | [optional] 
**row_count** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.area_response import AreaResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AreaResponse from a JSON string
area_response_instance = AreaResponse.from_json(json)
# print the JSON string representation of the object
print(AreaResponse.to_json())

# convert the object into a dict
area_response_dict = area_response_instance.to_dict()
# create an instance of AreaResponse from a dict
area_response_from_dict = AreaResponse.from_dict(area_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


