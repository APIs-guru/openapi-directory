# ControllersPackageDetailResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**ControllersPackageDetailItem**](ControllersPackageDetailItem.md) |  | [optional] 

## Example

```python
from openapi_client.models.controllers_package_detail_response import ControllersPackageDetailResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ControllersPackageDetailResponse from a JSON string
controllers_package_detail_response_instance = ControllersPackageDetailResponse.from_json(json)
# print the JSON string representation of the object
print(ControllersPackageDetailResponse.to_json())

# convert the object into a dict
controllers_package_detail_response_dict = controllers_package_detail_response_instance.to_dict()
# create an instance of ControllersPackageDetailResponse from a dict
controllers_package_detail_response_from_dict = ControllersPackageDetailResponse.from_dict(controllers_package_detail_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


