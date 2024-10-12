# UrlAssignedTargetingOptionDetails

Details for assigned URL targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_URL`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**negative** | **bool** | Indicates if this option is being negatively targeted. | [optional] 
**url** | **str** | Required. The URL, for example &#x60;example.com&#x60;. DV360 supports two levels of subdirectory targeting, for example &#x60;www.example.com/one-subdirectory-level/second-level&#x60;, and five levels of subdomain targeting, for example &#x60;five.four.three.two.one.example.com&#x60;. | [optional] 

## Example

```python
from openapi_client.models.url_assigned_targeting_option_details import UrlAssignedTargetingOptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of UrlAssignedTargetingOptionDetails from a JSON string
url_assigned_targeting_option_details_instance = UrlAssignedTargetingOptionDetails.from_json(json)
# print the JSON string representation of the object
print(UrlAssignedTargetingOptionDetails.to_json())

# convert the object into a dict
url_assigned_targeting_option_details_dict = url_assigned_targeting_option_details_instance.to_dict()
# create an instance of UrlAssignedTargetingOptionDetails from a dict
url_assigned_targeting_option_details_from_dict = UrlAssignedTargetingOptionDetails.from_dict(url_assigned_targeting_option_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


