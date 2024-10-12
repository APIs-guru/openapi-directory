# BatchPersonalNameGeoIn


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**facts** | [**List[FactIn]**](FactIn.md) |  | [optional] 
**personal_names** | [**List[PersonalNameGeoIn]**](PersonalNameGeoIn.md) |  | [optional] 

## Example

```python
from openapi_client.models.batch_personal_name_geo_in import BatchPersonalNameGeoIn

# TODO update the JSON string below
json = "{}"
# create an instance of BatchPersonalNameGeoIn from a JSON string
batch_personal_name_geo_in_instance = BatchPersonalNameGeoIn.from_json(json)
# print the JSON string representation of the object
print(BatchPersonalNameGeoIn.to_json())

# convert the object into a dict
batch_personal_name_geo_in_dict = batch_personal_name_geo_in_instance.to_dict()
# create an instance of BatchPersonalNameGeoIn from a dict
batch_personal_name_geo_in_from_dict = BatchPersonalNameGeoIn.from_dict(batch_personal_name_geo_in_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


