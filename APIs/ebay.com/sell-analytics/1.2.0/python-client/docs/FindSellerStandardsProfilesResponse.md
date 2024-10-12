# FindSellerStandardsProfilesResponse

The response container for a list of seller profiles.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**standards_profiles** | [**List[StandardsProfile]**](StandardsProfile.md) | A list of the seller&#39;s standards profiles. A &amp;quot;standards profile&amp;quot; is a set of eBay seller standards categories and the values related to the associated seller. Profiles are distinguished by a combination of cycle and program values. The &amp;quot;program&amp;quot; value specifies the region to which the data is from. The &amp;quot;cycle&amp;quot; value specifies whether the values were determined just now, or if the values are from the last official eBay seller standards evaluation. | [optional] 

## Example

```python
from openapi_client.models.find_seller_standards_profiles_response import FindSellerStandardsProfilesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FindSellerStandardsProfilesResponse from a JSON string
find_seller_standards_profiles_response_instance = FindSellerStandardsProfilesResponse.from_json(json)
# print the JSON string representation of the object
print(FindSellerStandardsProfilesResponse.to_json())

# convert the object into a dict
find_seller_standards_profiles_response_dict = find_seller_standards_profiles_response_instance.to_dict()
# create an instance of FindSellerStandardsProfilesResponse from a dict
find_seller_standards_profiles_response_from_dict = FindSellerStandardsProfilesResponse.from_dict(find_seller_standards_profiles_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


