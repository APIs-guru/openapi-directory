# DeidentifiedStoreDestination

Contains configuration for streaming de-identified FHIR export.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**DeidentifyConfig**](DeidentifyConfig.md) |  | [optional] 
**store** | **str** | The full resource name of a Cloud Healthcare FHIR store, for example, &#x60;projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/fhirStores/{fhir_store_id}&#x60;. | [optional] 

## Example

```python
from openapi_client.models.deidentified_store_destination import DeidentifiedStoreDestination

# TODO update the JSON string below
json = "{}"
# create an instance of DeidentifiedStoreDestination from a JSON string
deidentified_store_destination_instance = DeidentifiedStoreDestination.from_json(json)
# print the JSON string representation of the object
print(DeidentifiedStoreDestination.to_json())

# convert the object into a dict
deidentified_store_destination_dict = deidentified_store_destination_instance.to_dict()
# create an instance of DeidentifiedStoreDestination from a dict
deidentified_store_destination_from_dict = DeidentifiedStoreDestination.from_dict(deidentified_store_destination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


