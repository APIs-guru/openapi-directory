# EntitiesBatchResultV2dot1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**documents** | [**List[EntitiesBatchResultItemV2dot1]**](EntitiesBatchResultItemV2dot1.md) |  | [optional] [readonly] 
**errors** | [**List[ErrorRecord]**](ErrorRecord.md) |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.entities_batch_result_v2dot1 import EntitiesBatchResultV2dot1

# TODO update the JSON string below
json = "{}"
# create an instance of EntitiesBatchResultV2dot1 from a JSON string
entities_batch_result_v2dot1_instance = EntitiesBatchResultV2dot1.from_json(json)
# print the JSON string representation of the object
print(EntitiesBatchResultV2dot1.to_json())

# convert the object into a dict
entities_batch_result_v2dot1_dict = entities_batch_result_v2dot1_instance.to_dict()
# create an instance of EntitiesBatchResultV2dot1 from a dict
entities_batch_result_v2dot1_from_dict = EntitiesBatchResultV2dot1.from_dict(entities_batch_result_v2dot1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


