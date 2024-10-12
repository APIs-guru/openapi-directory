# V3DynamoDbTimetable


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applicable_local_date** | **str** | Formated date string of applicable date | [optional] [readonly] 
**exists** | **bool** | True if the named table has been created in DynamoDB (i.e. at least one departure record has been loaded),              or false if there are no records for this date and transport type. | [optional] 
**parser_mapping_version** | **str** | Diva Mapping Version used to load Parser into DynamoDB | [optional] 
**parser_version** | **int** | Parser verison | [optional] 
**pt_mapping_version** | **str** | Diva Mapping Version used to load PT into DynamoDB | [optional] 
**pt_version** | **int** | PT version | [optional] 
**table_name** | **str** | Name of corresponding table in DynamoDB. | [optional] 
**transport_type** | **int** | A.k.a. Transport Mode (e.g. Train, Tram, Bus, V/Line, Nightrider) | [optional] 

## Example

```python
from openapi_client.models.v3_dynamo_db_timetable import V3DynamoDbTimetable

# TODO update the JSON string below
json = "{}"
# create an instance of V3DynamoDbTimetable from a JSON string
v3_dynamo_db_timetable_instance = V3DynamoDbTimetable.from_json(json)
# print the JSON string representation of the object
print(V3DynamoDbTimetable.to_json())

# convert the object into a dict
v3_dynamo_db_timetable_dict = v3_dynamo_db_timetable_instance.to_dict()
# create an instance of V3DynamoDbTimetable from a dict
v3_dynamo_db_timetable_from_dict = V3DynamoDbTimetable.from_dict(v3_dynamo_db_timetable_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


