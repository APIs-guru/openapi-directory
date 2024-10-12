# ListCarrierPackageTypesResponseBody

A list carrier package types response body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**packages** | [**List[PackageType]**](PackageType.md) | An array of custom package types | [optional] [readonly] 

## Example

```python
from openapi_client.models.list_carrier_package_types_response_body import ListCarrierPackageTypesResponseBody

# TODO update the JSON string below
json = "{}"
# create an instance of ListCarrierPackageTypesResponseBody from a JSON string
list_carrier_package_types_response_body_instance = ListCarrierPackageTypesResponseBody.from_json(json)
# print the JSON string representation of the object
print(ListCarrierPackageTypesResponseBody.to_json())

# convert the object into a dict
list_carrier_package_types_response_body_dict = list_carrier_package_types_response_body_instance.to_dict()
# create an instance of ListCarrierPackageTypesResponseBody from a dict
list_carrier_package_types_response_body_from_dict = ListCarrierPackageTypesResponseBody.from_dict(list_carrier_package_types_response_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


