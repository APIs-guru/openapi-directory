# OutliersRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[PlanningLevelDataDto]**](PlanningLevelDataDto.md) |  | [optional] 
**planning_level_id** | **str** |  | 
**start_date** | **str** |  | 

## Example

```python
from openapi_client.models.outliers_request import OutliersRequest

# TODO update the JSON string below
json = "{}"
# create an instance of OutliersRequest from a JSON string
outliers_request_instance = OutliersRequest.from_json(json)
# print the JSON string representation of the object
print(OutliersRequest.to_json())

# convert the object into a dict
outliers_request_dict = outliers_request_instance.to_dict()
# create an instance of OutliersRequest from a dict
outliers_request_from_dict = OutliersRequest.from_dict(outliers_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


