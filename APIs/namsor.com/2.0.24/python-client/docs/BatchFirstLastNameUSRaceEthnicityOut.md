# BatchFirstLastNameUSRaceEthnicityOut

Represents the output of inferring the LIKELY US 'race/ethnicity' from a personal name, given US country of residence and (optionally) a ZIP5 code.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**personal_names** | [**List[FirstLastNameUSRaceEthnicityOut]**](FirstLastNameUSRaceEthnicityOut.md) | Classified US &#39;race&#39;/ethnicized names | [optional] 

## Example

```python
from openapi_client.models.batch_first_last_name_us_race_ethnicity_out import BatchFirstLastNameUSRaceEthnicityOut

# TODO update the JSON string below
json = "{}"
# create an instance of BatchFirstLastNameUSRaceEthnicityOut from a JSON string
batch_first_last_name_us_race_ethnicity_out_instance = BatchFirstLastNameUSRaceEthnicityOut.from_json(json)
# print the JSON string representation of the object
print(BatchFirstLastNameUSRaceEthnicityOut.to_json())

# convert the object into a dict
batch_first_last_name_us_race_ethnicity_out_dict = batch_first_last_name_us_race_ethnicity_out_instance.to_dict()
# create an instance of BatchFirstLastNameUSRaceEthnicityOut from a dict
batch_first_last_name_us_race_ethnicity_out_from_dict = BatchFirstLastNameUSRaceEthnicityOut.from_dict(batch_first_last_name_us_race_ethnicity_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


