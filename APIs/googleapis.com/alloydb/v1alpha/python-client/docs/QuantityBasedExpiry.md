# QuantityBasedExpiry

A backup's position in a quantity-based retention queue, of backups with the same source cluster and type, with length, retention, specified by the backup's retention policy. Once the position is greater than the retention, the backup is eligible to be garbage collected. Example: 5 backups from the same source cluster and type with a quantity-based retention of 3 and denoted by backup_id (position, retention). Safe: backup_5 (1, 3), backup_4, (2, 3), backup_3 (3, 3). Awaiting garbage collection: backup_2 (4, 3), backup_1 (5, 3)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**retention_count** | **int** | Output only. The backup&#39;s position among its backups with the same source cluster and type, by descending chronological order create time(i.e. newest first). | [optional] [readonly] 
**total_retention_count** | **int** | Output only. The length of the quantity-based queue, specified by the backup&#39;s retention policy. | [optional] [readonly] 

## Example

```python
from openapi_client.models.quantity_based_expiry import QuantityBasedExpiry

# TODO update the JSON string below
json = "{}"
# create an instance of QuantityBasedExpiry from a JSON string
quantity_based_expiry_instance = QuantityBasedExpiry.from_json(json)
# print the JSON string representation of the object
print(QuantityBasedExpiry.to_json())

# convert the object into a dict
quantity_based_expiry_dict = quantity_based_expiry_instance.to_dict()
# create an instance of QuantityBasedExpiry from a dict
quantity_based_expiry_from_dict = QuantityBasedExpiry.from_dict(quantity_based_expiry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


