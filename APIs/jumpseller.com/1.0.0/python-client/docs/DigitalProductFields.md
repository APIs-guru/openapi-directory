# DigitalProductFields


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expiration_seconds** | **int** | Time left in seconds before the current private URL expires | [optional] 
**id** | **int** | Unique identifier of the digital product | [optional] 
**url** | **str** | Private URL of the digital product | [optional] 

## Example

```python
from openapi_client.models.digital_product_fields import DigitalProductFields

# TODO update the JSON string below
json = "{}"
# create an instance of DigitalProductFields from a JSON string
digital_product_fields_instance = DigitalProductFields.from_json(json)
# print the JSON string representation of the object
print(DigitalProductFields.to_json())

# convert the object into a dict
digital_product_fields_dict = digital_product_fields_instance.to_dict()
# create an instance of DigitalProductFields from a dict
digital_product_fields_from_dict = DigitalProductFields.from_dict(digital_product_fields_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


