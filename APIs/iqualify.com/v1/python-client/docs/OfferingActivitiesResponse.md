# OfferingActivitiesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activity_id** | **str** |  | [optional] 
**time** | **float** | expected minutes to complete | [optional] 
**title** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.offering_activities_response import OfferingActivitiesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of OfferingActivitiesResponse from a JSON string
offering_activities_response_instance = OfferingActivitiesResponse.from_json(json)
# print the JSON string representation of the object
print(OfferingActivitiesResponse.to_json())

# convert the object into a dict
offering_activities_response_dict = offering_activities_response_instance.to_dict()
# create an instance of OfferingActivitiesResponse from a dict
offering_activities_response_from_dict = OfferingActivitiesResponse.from_dict(offering_activities_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


