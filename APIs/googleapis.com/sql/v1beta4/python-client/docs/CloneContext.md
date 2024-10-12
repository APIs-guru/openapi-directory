# CloneContext

Database instance clone context.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allocated_ip_range** | **str** | The name of the allocated ip range for the private ip Cloud SQL instance. For example: \&quot;google-managed-services-default\&quot;. If set, the cloned instance ip will be created in the allocated range. The range name must comply with [RFC 1035](https://tools.ietf.org/html/rfc1035). Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])?. Reserved for future use. | [optional] 
**bin_log_coordinates** | [**BinLogCoordinates**](BinLogCoordinates.md) |  | [optional] 
**database_names** | **List[str]** | (SQL Server only) Clone only the specified databases from the source instance. Clone all databases if empty. | [optional] 
**destination_instance_name** | **str** | Name of the Cloud SQL instance to be created as a clone. | [optional] 
**kind** | **str** | This is always &#x60;sql#cloneContext&#x60;. | [optional] 
**pitr_timestamp_ms** | **str** | Reserved for future use. | [optional] 
**point_in_time** | **str** | Timestamp, if specified, identifies the time to which the source instance is cloned. | [optional] 
**preferred_zone** | **str** | Optional. (Point-in-time recovery for PostgreSQL only) Clone to an instance in the specified zone. If no zone is specified, clone to the same zone as the source instance. | [optional] 

## Example

```python
from openapi_client.models.clone_context import CloneContext

# TODO update the JSON string below
json = "{}"
# create an instance of CloneContext from a JSON string
clone_context_instance = CloneContext.from_json(json)
# print the JSON string representation of the object
print(CloneContext.to_json())

# convert the object into a dict
clone_context_dict = clone_context_instance.to_dict()
# create an instance of CloneContext from a dict
clone_context_from_dict = CloneContext.from_dict(clone_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


