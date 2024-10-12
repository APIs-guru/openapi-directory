# OutlierResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**index** | **int** |  | [optional] 
**type** | **str** |  | [optional] 
**value** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.outlier_response import OutlierResponse

# TODO update the JSON string below
json = "{}"
# create an instance of OutlierResponse from a JSON string
outlier_response_instance = OutlierResponse.from_json(json)
# print the JSON string representation of the object
print(OutlierResponse.to_json())

# convert the object into a dict
outlier_response_dict = outlier_response_instance.to_dict()
# create an instance of OutlierResponse from a dict
outlier_response_from_dict = OutlierResponse.from_dict(outlier_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


