# ListingLease


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**down_payment** | **float** | Down payment for this lease offer | [optional] 
**estimated_monthly_payment** | **float** | estimated monthly payment for this lease offer | [optional] 
**lease_term** | **int** | Lease term for this lease offer | [optional] 

## Example

```python
from openapi_client.models.listing_lease import ListingLease

# TODO update the JSON string below
json = "{}"
# create an instance of ListingLease from a JSON string
listing_lease_instance = ListingLease.from_json(json)
# print the JSON string representation of the object
print(ListingLease.to_json())

# convert the object into a dict
listing_lease_dict = listing_lease_instance.to_dict()
# create an instance of ListingLease from a dict
listing_lease_from_dict = ListingLease.from_dict(listing_lease_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


