# BillbeeInterfacesBillbeeAPIModelProductImage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**external_id** | **str** | The id of this image from the original system | [optional] 
**is_default_image** | **bool** | True if the image is / should be the default image | [optional] 
**position** | **int** | The order of this image | [optional] 
**url** | **str** | The url to the image | [optional] 

## Example

```python
from openapi_client.models.billbee_interfaces_billbee_api_model_product_image import BillbeeInterfacesBillbeeAPIModelProductImage

# TODO update the JSON string below
json = "{}"
# create an instance of BillbeeInterfacesBillbeeAPIModelProductImage from a JSON string
billbee_interfaces_billbee_api_model_product_image_instance = BillbeeInterfacesBillbeeAPIModelProductImage.from_json(json)
# print the JSON string representation of the object
print(BillbeeInterfacesBillbeeAPIModelProductImage.to_json())

# convert the object into a dict
billbee_interfaces_billbee_api_model_product_image_dict = billbee_interfaces_billbee_api_model_product_image_instance.to_dict()
# create an instance of BillbeeInterfacesBillbeeAPIModelProductImage from a dict
billbee_interfaces_billbee_api_model_product_image_from_dict = BillbeeInterfacesBillbeeAPIModelProductImage.from_dict(billbee_interfaces_billbee_api_model_product_image_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


