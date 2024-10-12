# ControllersAdvisoryDetailResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**ControllersAdvisoryDetailItem**](ControllersAdvisoryDetailItem.md) |  | [optional] 

## Example

```python
from openapi_client.models.controllers_advisory_detail_response import ControllersAdvisoryDetailResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ControllersAdvisoryDetailResponse from a JSON string
controllers_advisory_detail_response_instance = ControllersAdvisoryDetailResponse.from_json(json)
# print the JSON string representation of the object
print(ControllersAdvisoryDetailResponse.to_json())

# convert the object into a dict
controllers_advisory_detail_response_dict = controllers_advisory_detail_response_instance.to_dict()
# create an instance of ControllersAdvisoryDetailResponse from a dict
controllers_advisory_detail_response_from_dict = ControllersAdvisoryDetailResponse.from_dict(controllers_advisory_detail_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


