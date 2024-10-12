# DataSource

Datasource is a logical namespace for items to be indexed. All items must belong to a datasource. This is the prerequisite before items can be indexed into Cloud Search. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disable_modifications** | **bool** | If true, sets the datasource to read-only mode. In read-only mode, the Indexing API rejects any requests to index or delete items in this source. Enabling read-only mode does not stop the processing of previously accepted data. | [optional] 
**disable_serving** | **bool** | Disable serving any search or assist results. | [optional] 
**display_name** | **str** | Required. Display name of the datasource The maximum length is 300 characters. | [optional] 
**indexing_service_accounts** | **List[str]** | List of service accounts that have indexing access. | [optional] 
**items_visibility** | [**List[GSuitePrincipal]**](GSuitePrincipal.md) | This field restricts visibility to items at the datasource level. Items within the datasource are restricted to the union of users and groups included in this field. Note that, this does not ensure access to a specific item, as users need to have ACL permissions on the contained items. This ensures a high level access on the entire datasource, and that the individual items are not shared outside this visibility. | [optional] 
**name** | **str** | The name of the datasource resource. Format: datasources/{source_id}. The name is ignored when creating a datasource. | [optional] 
**operation_ids** | **List[str]** | IDs of the Long Running Operations (LROs) currently running for this schema. | [optional] 
**return_thumbnail_urls** | **bool** | Can a user request to get thumbnail URI for Items indexed in this data source. | [optional] 
**short_name** | **str** | A short name or alias for the source. This value will be used to match the &#39;source&#39; operator. For example, if the short name is *&lt;value&gt;* then queries like *source:&lt;value&gt;* will only return results for this source. The value must be unique across all datasources. The value must only contain alphanumeric characters (a-zA-Z0-9). The value cannot start with &#39;google&#39; and cannot be one of the following: mail, gmail, docs, drive, groups, sites, calendar, hangouts, gplus, keep, people, teams. Its maximum length is 32 characters. | [optional] 

## Example

```python
from openapi_client.models.data_source import DataSource

# TODO update the JSON string below
json = "{}"
# create an instance of DataSource from a JSON string
data_source_instance = DataSource.from_json(json)
# print the JSON string representation of the object
print(DataSource.to_json())

# convert the object into a dict
data_source_dict = data_source_instance.to_dict()
# create an instance of DataSource from a dict
data_source_from_dict = DataSource.from_dict(data_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


