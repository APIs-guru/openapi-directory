# BatchFirstLastNameGeoIn


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**facts** | [**List[FactIn]**](FactIn.md) |  | [optional] 
**personal_names** | [**List[FirstLastNameGeoIn]**](FirstLastNameGeoIn.md) |  | [optional] 

## Example

```python
from openapi_client.models.batch_first_last_name_geo_in import BatchFirstLastNameGeoIn

# TODO update the JSON string below
json = "{}"
# create an instance of BatchFirstLastNameGeoIn from a JSON string
batch_first_last_name_geo_in_instance = BatchFirstLastNameGeoIn.from_json(json)
# print the JSON string representation of the object
print(BatchFirstLastNameGeoIn.to_json())

# convert the object into a dict
batch_first_last_name_geo_in_dict = batch_first_last_name_geo_in_instance.to_dict()
# create an instance of BatchFirstLastNameGeoIn from a dict
batch_first_last_name_geo_in_from_dict = BatchFirstLastNameGeoIn.from_dict(batch_first_last_name_geo_in_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


