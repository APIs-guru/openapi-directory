# DatabaseResourceHealthSignalData

Common model for database resource health signal data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_metadata** | **Dict[str, object]** | Any other additional metadata | [optional] 
**compliance** | [**List[Compliance]**](Compliance.md) | Industry standards associated with this signal; if this signal is an issue, that could be a violation of the associated industry standard(s). For example, AUTO_BACKUP_DISABLED signal is associated with CIS GCP 1.1, CIS GCP 1.2, CIS GCP 1.3, NIST 800-53 and ISO-27001 compliance standards. If a database resource does not have automated backup enable, it will violate these following industry standards. | [optional] 
**description** | **str** | Description associated with signal | [optional] 
**event_time** | **str** | Required. The last time at which the event described by this signal took place | [optional] 
**external_uri** | **str** | The external-uri of the signal, using which more information about this signal can be obtained. In GCP, this will take user to SCC page to get more details about signals. | [optional] 
**name** | **str** | Required. The name of the signal, ex: PUBLIC_SQL_INSTANCE, SQL_LOG_ERROR_VERBOSITY etc. | [optional] 
**provider** | **str** | Cloud provider name. Ex: GCP/AWS/Azure/OnPrem/SelfManaged | [optional] 
**resource_container** | **str** | Closest parent container of this resource. In GCP, &#39;container&#39; refers to a Cloud Resource Manager project. It must be resource name of a Cloud Resource Manager project with the format of \&quot;provider//\&quot;, such as \&quot;projects/123\&quot;. For GCP provided resources, number should be project number. | [optional] 
**resource_name** | **str** | Required. Database resource name associated with the signal. Resource name to follow CAIS resource_name format as noted here go/condor-common-datamodel | [optional] 
**signal_class** | **str** | Required. The class of the signal, such as if it&#39;s a THREAT or VULNERABILITY. | [optional] 
**signal_id** | **str** | Required. Unique identifier for the signal. This is an unique id which would be mainatined by partner to identify a signal. | [optional] 
**signal_type** | **str** | Required. Type of signal, for example, &#x60;AVAILABLE_IN_MULTIPLE_ZONES&#x60;, &#x60;LOGGING_MOST_ERRORS&#x60;, etc. | [optional] 
**state** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.database_resource_health_signal_data import DatabaseResourceHealthSignalData

# TODO update the JSON string below
json = "{}"
# create an instance of DatabaseResourceHealthSignalData from a JSON string
database_resource_health_signal_data_instance = DatabaseResourceHealthSignalData.from_json(json)
# print the JSON string representation of the object
print(DatabaseResourceHealthSignalData.to_json())

# convert the object into a dict
database_resource_health_signal_data_dict = database_resource_health_signal_data_instance.to_dict()
# create an instance of DatabaseResourceHealthSignalData from a dict
database_resource_health_signal_data_from_dict = DatabaseResourceHealthSignalData.from_dict(database_resource_health_signal_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


