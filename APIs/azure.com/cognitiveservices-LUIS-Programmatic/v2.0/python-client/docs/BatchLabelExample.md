# BatchLabelExample

Response when adding a batch of labeled examples.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**OperationStatus**](OperationStatus.md) |  | [optional] 
**has_error** | **bool** |  | [optional] 
**value** | [**LabelExampleResponse**](LabelExampleResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.batch_label_example import BatchLabelExample

# TODO update the JSON string below
json = "{}"
# create an instance of BatchLabelExample from a JSON string
batch_label_example_instance = BatchLabelExample.from_json(json)
# print the JSON string representation of the object
print(BatchLabelExample.to_json())

# convert the object into a dict
batch_label_example_dict = batch_label_example_instance.to_dict()
# create an instance of BatchLabelExample from a dict
batch_label_example_from_dict = BatchLabelExample.from_dict(batch_label_example_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


