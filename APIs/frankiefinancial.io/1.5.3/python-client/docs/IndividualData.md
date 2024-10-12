# IndividualData

x

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addresses** | [**List[AddressObject]**](AddressObject.md) | List of all found addresses associated with this person  | [optional] 
**beneficially_held** | **bool** | If describing an (ultimate) beneficial owner, then if any of the shared held are not benefially held, this field will be set to \&quot;false\&quot;  | 
**date_of_birth** | **date** | RFC3339 formatted date | [optional] 
**name** | **str** | Name of the individual  | [optional] 
**percent_owned** | **float** | If describing an (ultimate) beneficial owner, the percentage of the company owned by this Individual  | 
**role** | **str** | If this individual has a role as an officeholder, such as director, then this will be described here. May be blank.  | 
**screening_result** | [**ScreeningResult**](ScreeningResult.md) |  | [optional] 

## Example

```python
from openapi_client.models.individual_data import IndividualData

# TODO update the JSON string below
json = "{}"
# create an instance of IndividualData from a JSON string
individual_data_instance = IndividualData.from_json(json)
# print the JSON string representation of the object
print(IndividualData.to_json())

# convert the object into a dict
individual_data_dict = individual_data_instance.to_dict()
# create an instance of IndividualData from a dict
individual_data_from_dict = IndividualData.from_dict(individual_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


