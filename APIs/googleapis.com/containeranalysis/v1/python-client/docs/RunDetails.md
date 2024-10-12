# RunDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**builder** | [**ProvenanceBuilder**](ProvenanceBuilder.md) |  | [optional] 
**byproducts** | [**List[ResourceDescriptor]**](ResourceDescriptor.md) |  | [optional] 
**metadata** | [**BuildMetadata**](BuildMetadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.run_details import RunDetails

# TODO update the JSON string below
json = "{}"
# create an instance of RunDetails from a JSON string
run_details_instance = RunDetails.from_json(json)
# print the JSON string representation of the object
print(RunDetails.to_json())

# convert the object into a dict
run_details_dict = run_details_instance.to_dict()
# create an instance of RunDetails from a dict
run_details_from_dict = RunDetails.from_dict(run_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


