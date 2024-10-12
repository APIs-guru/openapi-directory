# BatchFirstLastNameGeoSubclassificationOut

Represents the output of inferring the LIKELY country subclassification (regional names).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**personal_names** | [**List[FirstLastNameGeoSubclassificationOut]**](FirstLastNameGeoSubclassificationOut.md) | Classified names at sub country level (region or state) | [optional] 

## Example

```python
from openapi_client.models.batch_first_last_name_geo_subclassification_out import BatchFirstLastNameGeoSubclassificationOut

# TODO update the JSON string below
json = "{}"
# create an instance of BatchFirstLastNameGeoSubclassificationOut from a JSON string
batch_first_last_name_geo_subclassification_out_instance = BatchFirstLastNameGeoSubclassificationOut.from_json(json)
# print the JSON string representation of the object
print(BatchFirstLastNameGeoSubclassificationOut.to_json())

# convert the object into a dict
batch_first_last_name_geo_subclassification_out_dict = batch_first_last_name_geo_subclassification_out_instance.to_dict()
# create an instance of BatchFirstLastNameGeoSubclassificationOut from a dict
batch_first_last_name_geo_subclassification_out_from_dict = BatchFirstLastNameGeoSubclassificationOut.from_dict(batch_first_last_name_geo_subclassification_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


