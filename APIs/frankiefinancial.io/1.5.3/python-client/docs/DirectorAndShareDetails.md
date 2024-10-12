# DirectorAndShareDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**persons_of_significant_control** | [**ArrayOfPSCDetails**](ArrayOfPSCDetails.md) |  | [optional] 
**capital_reserves** | [**CapitalReserves**](CapitalReserves.md) |  | [optional] 
**directors** | [**ArrayOfDirector**](ArrayOfDirector.md) |  | [optional] 
**share_holder_summary** | [**ShareholderSummary**](ShareholderSummary.md) |  | [optional] 
**share_holders** | [**ArrayOfShareholderDetails**](ArrayOfShareholderDetails.md) |  | [optional] 

## Example

```python
from openapi_client.models.director_and_share_details import DirectorAndShareDetails

# TODO update the JSON string below
json = "{}"
# create an instance of DirectorAndShareDetails from a JSON string
director_and_share_details_instance = DirectorAndShareDetails.from_json(json)
# print the JSON string representation of the object
print(DirectorAndShareDetails.to_json())

# convert the object into a dict
director_and_share_details_dict = director_and_share_details_instance.to_dict()
# create an instance of DirectorAndShareDetails from a dict
director_and_share_details_from_dict = DirectorAndShareDetails.from_dict(director_and_share_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


