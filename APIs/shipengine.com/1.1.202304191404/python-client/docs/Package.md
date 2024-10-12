# Package

A package associated with a [shipping label](https://www.shipengine.com/docs/labels/create-a-label/) 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_description** | **str** | A short description of the package content. Required for shipments moving to, from, and through Mexico.  | [optional] 
**dimensions** | [**Dimensions**](Dimensions.md) | The package dimensions | [optional] 
**external_package_id** | **str** | An external package id. | [optional] 
**form_download** | [**OptionalLink**](OptionalLink.md) | The form download for any customs that are needed | [optional] [readonly] 
**insured_value** | [**MonetaryValue**](MonetaryValue.md) | The insured value of the package.  Requires the &#x60;insurance_provider&#x60; field of the shipment to be set.  | [optional] 
**label_download** | [**LabelDownload**](LabelDownload.md) | The label download for the package | [optional] [readonly] 
**label_messages** | [**LabelMessages**](LabelMessages.md) |  | [optional] 
**package_code** | **str** | The [package type](https://www.shipengine.com/docs/reference/list-carrier-packages/), such as &#x60;thick_envelope&#x60;, &#x60;small_flat_rate_box&#x60;, &#x60;large_package&#x60;, etc.  The code &#x60;package&#x60; indicates a custom or unknown package type.  | [optional] 
**package_id** | **str** | A string that uniquely identifies this [package type](https://www.shipengine.com/docs/reference/list-carrier-packages/) | [optional] 
**sequence** | **int** | Package sequence | [optional] [readonly] 
**tracking_number** | **str** | The tracking number for the package.  The format depends on the carrier.  | [optional] [readonly] 
**weight** | [**Weight**](Weight.md) | The package weight | 

## Example

```python
from openapi_client.models.package import Package

# TODO update the JSON string below
json = "{}"
# create an instance of Package from a JSON string
package_instance = Package.from_json(json)
# print the JSON string representation of the object
print(Package.to_json())

# convert the object into a dict
package_dict = package_instance.to_dict()
# create an instance of Package from a dict
package_from_dict = Package.from_dict(package_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


