# LocationPolicy


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_locations** | **List[str]** | A list of allowed location names represented by internal URLs. Each location can be a region or a zone. Only one region or multiple zones in one region is supported now. For example, [\&quot;regions/us-central1\&quot;] allow VMs in any zones in region us-central1. [\&quot;zones/us-central1-a\&quot;, \&quot;zones/us-central1-c\&quot;] only allow VMs in zones us-central1-a and us-central1-c. All locations end up in different regions would cause errors. For example, [\&quot;regions/us-central1\&quot;, \&quot;zones/us-central1-a\&quot;, \&quot;zones/us-central1-b\&quot;, \&quot;zones/us-west1-a\&quot;] contains 2 regions \&quot;us-central1\&quot; and \&quot;us-west1\&quot;. An error is expected in this case. | [optional] 

## Example

```python
from openapi_client.models.location_policy import LocationPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of LocationPolicy from a JSON string
location_policy_instance = LocationPolicy.from_json(json)
# print the JSON string representation of the object
print(LocationPolicy.to_json())

# convert the object into a dict
location_policy_dict = location_policy_instance.to_dict()
# create an instance of LocationPolicy from a dict
location_policy_from_dict = LocationPolicy.from_dict(location_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


