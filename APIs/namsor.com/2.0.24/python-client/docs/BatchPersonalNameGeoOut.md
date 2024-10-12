# BatchPersonalNameGeoOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**personal_names** | [**List[PersonalNameGeoOut]**](PersonalNameGeoOut.md) | Classified geo names | [optional] 

## Example

```python
from openapi_client.models.batch_personal_name_geo_out import BatchPersonalNameGeoOut

# TODO update the JSON string below
json = "{}"
# create an instance of BatchPersonalNameGeoOut from a JSON string
batch_personal_name_geo_out_instance = BatchPersonalNameGeoOut.from_json(json)
# print the JSON string representation of the object
print(BatchPersonalNameGeoOut.to_json())

# convert the object into a dict
batch_personal_name_geo_out_dict = batch_personal_name_geo_out_instance.to_dict()
# create an instance of BatchPersonalNameGeoOut from a dict
batch_personal_name_geo_out_from_dict = BatchPersonalNameGeoOut.from_dict(batch_personal_name_geo_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


