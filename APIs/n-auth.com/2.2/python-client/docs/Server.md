# Server


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_count** | **int** | Number of accounts registered with this server | [optional] 
**appandroid** | **str** | URL of the app in Google Play | [optional] 
**appios** | **str** | URL of the app in the App Store | [optional] 
**appname** | **str** | name of the app | [optional] 
**appurl** | **str** | URL (prefix) to launch the app | [optional] 
**last_login** | **int** | Last login on this server | [optional] 
**logo** | **str** | Base 64 encoded logo | 
**owner** | **int** | Owner id | [optional] 
**pin_timeout** | **int** | Time (minutes) since the last time the user entered his PIN, that the user is not requested a PIN at login. -1 means that the user is never asked for a PIN before logging in, 0 means that the user is asked every time he wants to login | 
**pin_trans_timeout** | **int** | Time (minutes) since the last time the user entered his PIN, that the user is not requested a PIN at transaction approval. -1 means that the user is never asked for a PIN before approving a transaction, 0 means that the user is asked every time he wants to approve a transaction | 
**ping_time** | **int** | Time (seconds) that the nextAuth app has before it needs to reply to a ping request from the nextAuth server (continuous authentication) | 
**server_flags** | **List[str]** | Server flags | 
**server_name** | **str** | Server name | 
**serverid** | **str** | Base64 encoded id of the nextAuth server | 
**serverpk** | **str** | Base64 encoded public key of the nextAuth server | 
**siteurl** | **str** | URL of the main website | [optional] 
**wsurl** | **str** | Websocket URL | [optional] 

## Example

```python
from openapi_client.models.server import Server

# TODO update the JSON string below
json = "{}"
# create an instance of Server from a JSON string
server_instance = Server.from_json(json)
# print the JSON string representation of the object
print(Server.to_json())

# convert the object into a dict
server_dict = server_instance.to_dict()
# create an instance of Server from a dict
server_from_dict = Server.from_dict(server_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


