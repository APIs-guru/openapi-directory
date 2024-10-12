# OutputFileDestination


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container** | [**OutputFileBlobContainerDestination**](OutputFileBlobContainerDestination.md) |  | [optional] 

## Example

```python
from openapi_client.models.output_file_destination import OutputFileDestination

# TODO update the JSON string below
json = "{}"
# create an instance of OutputFileDestination from a JSON string
output_file_destination_instance = OutputFileDestination.from_json(json)
# print the JSON string representation of the object
print(OutputFileDestination.to_json())

# convert the object into a dict
output_file_destination_dict = output_file_destination_instance.to_dict()
# create an instance of OutputFileDestination from a dict
output_file_destination_from_dict = OutputFileDestination.from_dict(output_file_destination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


