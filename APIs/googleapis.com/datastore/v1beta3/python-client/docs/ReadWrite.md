# ReadWrite

Options specific to read / write transactions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**previous_transaction** | **bytearray** | The transaction identifier of the transaction being retried. | [optional] 

## Example

```python
from openapi_client.models.read_write import ReadWrite

# TODO update the JSON string below
json = "{}"
# create an instance of ReadWrite from a JSON string
read_write_instance = ReadWrite.from_json(json)
# print the JSON string representation of the object
print(ReadWrite.to_json())

# convert the object into a dict
read_write_dict = read_write_instance.to_dict()
# create an instance of ReadWrite from a dict
read_write_from_dict = ReadWrite.from_dict(read_write_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


