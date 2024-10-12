# DigitalProductEditFields


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filename** | **str** | Filename of the digital product (with file extensison) | [optional] 
**url** | **str** | Public accessible URL with the desired file contents. (LIMIT: 100MB) | [optional] 

## Example

```python
from openapi_client.models.digital_product_edit_fields import DigitalProductEditFields

# TODO update the JSON string below
json = "{}"
# create an instance of DigitalProductEditFields from a JSON string
digital_product_edit_fields_instance = DigitalProductEditFields.from_json(json)
# print the JSON string representation of the object
print(DigitalProductEditFields.to_json())

# convert the object into a dict
digital_product_edit_fields_dict = digital_product_edit_fields_instance.to_dict()
# create an instance of DigitalProductEditFields from a dict
digital_product_edit_fields_from_dict = DigitalProductEditFields.from_dict(digital_product_edit_fields_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


