# QuantityBasedRetention

A quantity based policy specifies that a certain number of the most recent successful backups should be retained.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | The number of backups to retain. | [optional] 

## Example

```python
from openapi_client.models.quantity_based_retention import QuantityBasedRetention

# TODO update the JSON string below
json = "{}"
# create an instance of QuantityBasedRetention from a JSON string
quantity_based_retention_instance = QuantityBasedRetention.from_json(json)
# print the JSON string representation of the object
print(QuantityBasedRetention.to_json())

# convert the object into a dict
quantity_based_retention_dict = quantity_based_retention_instance.to_dict()
# create an instance of QuantityBasedRetention from a dict
quantity_based_retention_from_dict = QuantityBasedRetention.from_dict(quantity_based_retention_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


