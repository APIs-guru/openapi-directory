# BulkCreationParametersFragment

Parameters for creating multiple virtual machines as a single action.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance_count** | **int** | The number of virtual machine instances to create. | [optional] 

## Example

```python
from openapi_client.models.bulk_creation_parameters_fragment import BulkCreationParametersFragment

# TODO update the JSON string below
json = "{}"
# create an instance of BulkCreationParametersFragment from a JSON string
bulk_creation_parameters_fragment_instance = BulkCreationParametersFragment.from_json(json)
# print the JSON string representation of the object
print(BulkCreationParametersFragment.to_json())

# convert the object into a dict
bulk_creation_parameters_fragment_dict = bulk_creation_parameters_fragment_instance.to_dict()
# create an instance of BulkCreationParametersFragment from a dict
bulk_creation_parameters_fragment_from_dict = BulkCreationParametersFragment.from_dict(bulk_creation_parameters_fragment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


