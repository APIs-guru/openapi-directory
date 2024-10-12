# DescribeDatabaseEntitiesResponse

Response message for 'DescribeDatabaseEntities' request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**database_entities** | [**List[DatabaseEntity]**](DatabaseEntity.md) | The list of database entities for the conversion workspace. | [optional] 
**next_page_token** | **str** | A token which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.describe_database_entities_response import DescribeDatabaseEntitiesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DescribeDatabaseEntitiesResponse from a JSON string
describe_database_entities_response_instance = DescribeDatabaseEntitiesResponse.from_json(json)
# print the JSON string representation of the object
print(DescribeDatabaseEntitiesResponse.to_json())

# convert the object into a dict
describe_database_entities_response_dict = describe_database_entities_response_instance.to_dict()
# create an instance of DescribeDatabaseEntitiesResponse from a dict
describe_database_entities_response_from_dict = DescribeDatabaseEntitiesResponse.from_dict(describe_database_entities_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


