# ConsumerRights


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_bills** | **bool** |  | [optional] [default to False]
**access_consumption_statistics** | **bool** |  | [optional] [default to False]
**access_credit_count** | **bool** |  | [optional] [default to False]
**access_organisations** | **bool** |  | [optional] [default to False]
**access_organisations_bills** | **bool** |  | [optional] [default to False]
**access_organisations_consumption_statistics** | **bool** |  | [optional] [default to False]
**access_organisations_credit_count** | **bool** |  | [optional] [default to False]
**access_personal_information** | **bool** |  | [optional] [default to False]
**almighty** | **bool** |  | [optional] [default to False]
**manage_applications** | **bool** |  | [optional] [default to False]
**manage_organisations** | **bool** |  | [optional] [default to False]
**manage_organisations_applications** | **bool** |  | [optional] [default to False]
**manage_organisations_members** | **bool** |  | [optional] [default to False]
**manage_organisations_services** | **bool** |  | [optional] [default to False]
**manage_personal_information** | **bool** |  | [optional] [default to False]
**manage_services** | **bool** |  | [optional] [default to False]
**manage_ssh_keys** | **bool** |  | [optional] [default to False]

## Example

```python
from openapi_client.models.consumer_rights import ConsumerRights

# TODO update the JSON string below
json = "{}"
# create an instance of ConsumerRights from a JSON string
consumer_rights_instance = ConsumerRights.from_json(json)
# print the JSON string representation of the object
print(ConsumerRights.to_json())

# convert the object into a dict
consumer_rights_dict = consumer_rights_instance.to_dict()
# create an instance of ConsumerRights from a dict
consumer_rights_from_dict = ConsumerRights.from_dict(consumer_rights_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


