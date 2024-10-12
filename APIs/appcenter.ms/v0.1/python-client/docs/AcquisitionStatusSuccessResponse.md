# AcquisitionStatusSuccessResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The code indicating the status | 
**message** | **str** | The message indicating the status | 

## Example

```python
from openapi_client.models.acquisition_status_success_response import AcquisitionStatusSuccessResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AcquisitionStatusSuccessResponse from a JSON string
acquisition_status_success_response_instance = AcquisitionStatusSuccessResponse.from_json(json)
# print the JSON string representation of the object
print(AcquisitionStatusSuccessResponse.to_json())

# convert the object into a dict
acquisition_status_success_response_dict = acquisition_status_success_response_instance.to_dict()
# create an instance of AcquisitionStatusSuccessResponse from a dict
acquisition_status_success_response_from_dict = AcquisitionStatusSuccessResponse.from_dict(acquisition_status_success_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


