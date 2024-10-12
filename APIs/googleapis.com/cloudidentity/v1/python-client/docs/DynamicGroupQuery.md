# DynamicGroupQuery

Defines a query on a resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query** | **str** | Query that determines the memberships of the dynamic group. Examples: All users with at least one &#x60;organizations.department&#x60; of engineering. &#x60;user.organizations.exists(org, org.department&#x3D;&#x3D;&#39;engineering&#39;)&#x60; All users with at least one location that has &#x60;area&#x60; of &#x60;foo&#x60; and &#x60;building_id&#x60; of &#x60;bar&#x60;. &#x60;user.locations.exists(loc, loc.area&#x3D;&#x3D;&#39;foo&#39; &amp;&amp; loc.building_id&#x3D;&#x3D;&#39;bar&#39;)&#x60; All users with any variation of the name John Doe (case-insensitive queries add &#x60;equalsIgnoreCase()&#x60; to the value being queried). &#x60;user.name.value.equalsIgnoreCase(&#39;jOhn DoE&#39;)&#x60; | [optional] 
**resource_type** | **str** | Resource type for the Dynamic Group Query | [optional] 

## Example

```python
from openapi_client.models.dynamic_group_query import DynamicGroupQuery

# TODO update the JSON string below
json = "{}"
# create an instance of DynamicGroupQuery from a JSON string
dynamic_group_query_instance = DynamicGroupQuery.from_json(json)
# print the JSON string representation of the object
print(DynamicGroupQuery.to_json())

# convert the object into a dict
dynamic_group_query_dict = dynamic_group_query_instance.to_dict()
# create an instance of DynamicGroupQuery from a dict
dynamic_group_query_from_dict = DynamicGroupQuery.from_dict(dynamic_group_query_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


