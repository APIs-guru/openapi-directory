# CreatePackageTypeRequestBody

A create package type request body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Provides a helpful description for the custom package. | [optional] 
**dimensions** | [**Dimensions**](Dimensions.md) | The custom dimensions for the package. | [optional] 
**name** | **str** |  | 
**package_code** | **str** | A [package type](https://www.shipengine.com/docs/reference/list-carrier-packages/), such as &#x60;thick_envelope&#x60;, &#x60;small_flat_rate_box&#x60;, &#x60;large_package&#x60;, etc.  Use the code &#x60;package&#x60; for custom or unknown package types.  | 
**package_id** | **str** | A string that uniquely identifies the package. | [optional] 

## Example

```python
from openapi_client.models.create_package_type_request_body import CreatePackageTypeRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of CreatePackageTypeRequestBody from a JSON string
create_package_type_request_body_instance = CreatePackageTypeRequestBody.from_json(json)
# print the JSON string representation of the object
print(CreatePackageTypeRequestBody.to_json())

# convert the object into a dict
create_package_type_request_body_dict = create_package_type_request_body_instance.to_dict()
# create an instance of CreatePackageTypeRequestBody from a dict
create_package_type_request_body_from_dict = CreatePackageTypeRequestBody.from_dict(create_package_type_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


