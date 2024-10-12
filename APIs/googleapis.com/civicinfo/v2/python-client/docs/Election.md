# Election

Information about the election that was queried.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**election_day** | **str** | Day of the election in YYYY-MM-DD format. | [optional] 
**id** | **str** | The unique ID of this election. | [optional] 
**name** | **str** | A displayable name for the election. | [optional] 
**ocd_division_id** | **str** | The political division of the election. Represented as an OCD Division ID. Voters within these political jurisdictions are covered by this election. This is typically a state such as ocd-division/country:us/state:ca or for the midterms or general election the entire US (i.e. ocd-division/country:us). | [optional] 
**shape_lookup_behavior** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.election import Election

# TODO update the JSON string below
json = "{}"
# create an instance of Election from a JSON string
election_instance = Election.from_json(json)
# print the JSON string representation of the object
print(Election.to_json())

# convert the object into a dict
election_dict = election_instance.to_dict()
# create an instance of Election from a dict
election_from_dict = Election.from_dict(election_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


