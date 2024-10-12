# BatchDataInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Data**](Data.md) |  | [optional] 
**template** | **int** | Template id | [optional] 

## Example

```python
from openapi_client.models.batch_data_inner import BatchDataInner

# TODO update the JSON string below
json = "{}"
# create an instance of BatchDataInner from a JSON string
batch_data_inner_instance = BatchDataInner.from_json(json)
# print the JSON string representation of the object
print(BatchDataInner.to_json())

# convert the object into a dict
batch_data_inner_dict = batch_data_inner_instance.to_dict()
# create an instance of BatchDataInner from a dict
batch_data_inner_from_dict = BatchDataInner.from_dict(batch_data_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


