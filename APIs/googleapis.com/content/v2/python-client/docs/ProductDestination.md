# ProductDestination


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_name** | **str** | The name of the destination. | [optional] 
**intention** | **str** | Whether the destination is required, excluded or should be validated. Acceptable values are: - \&quot;&#x60;default&#x60;\&quot; - \&quot;&#x60;excluded&#x60;\&quot; - \&quot;&#x60;optional&#x60;\&quot; - \&quot;&#x60;required&#x60;\&quot;  | [optional] 

## Example

```python
from openapi_client.models.product_destination import ProductDestination

# TODO update the JSON string below
json = "{}"
# create an instance of ProductDestination from a JSON string
product_destination_instance = ProductDestination.from_json(json)
# print the JSON string representation of the object
print(ProductDestination.to_json())

# convert the object into a dict
product_destination_dict = product_destination_instance.to_dict()
# create an instance of ProductDestination from a dict
product_destination_from_dict = ProductDestination.from_dict(product_destination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


