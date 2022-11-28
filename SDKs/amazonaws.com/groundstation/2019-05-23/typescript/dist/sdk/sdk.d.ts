import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://groundstation.{region}.amazonaws.com", "https://groundstation.{region}.amazonaws.com", "http://groundstation.{region}.amazonaws.com.cn", "https://groundstation.{region}.amazonaws.com.cn"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * cancelContact - Cancels a contact with a specified contact ID.
    **/
    cancelContact(req: operations.CancelContactRequest, config?: AxiosRequestConfig): Promise<operations.CancelContactResponse>;
    /**
     * createConfig - <p>Creates a <code>Config</code> with the specified <code>configData</code> parameters.</p> <p>Only one type of <code>configData</code> can be specified.</p>
    **/
    createConfig(req: operations.CreateConfigRequest, config?: AxiosRequestConfig): Promise<operations.CreateConfigResponse>;
    /**
     * createDataflowEndpointGroup - <p>Creates a <code>DataflowEndpoint</code> group containing the specified list of <code>DataflowEndpoint</code> objects.</p> <p>The <code>name</code> field in each endpoint is used in your mission profile <code>DataflowEndpointConfig</code> to specify which endpoints to use during a contact.</p> <p>When a contact uses multiple <code>DataflowEndpointConfig</code> objects, each <code>Config</code> must match a <code>DataflowEndpoint</code> in the same group.</p>
    **/
    createDataflowEndpointGroup(req: operations.CreateDataflowEndpointGroupRequest, config?: AxiosRequestConfig): Promise<operations.CreateDataflowEndpointGroupResponse>;
    /**
     * createMissionProfile - <p>Creates a mission profile.</p> <p> <code>dataflowEdges</code> is a list of lists of strings. Each lower level list of strings has two elements: a <i>from</i> ARN and a <i>to</i> ARN.</p>
    **/
    createMissionProfile(req: operations.CreateMissionProfileRequest, config?: AxiosRequestConfig): Promise<operations.CreateMissionProfileResponse>;
    /**
     * deleteConfig - Deletes a <code>Config</code>.
    **/
    deleteConfig(req: operations.DeleteConfigRequest, config?: AxiosRequestConfig): Promise<operations.DeleteConfigResponse>;
    /**
     * deleteDataflowEndpointGroup - Deletes a dataflow endpoint group.
    **/
    deleteDataflowEndpointGroup(req: operations.DeleteDataflowEndpointGroupRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDataflowEndpointGroupResponse>;
    /**
     * deleteMissionProfile - Deletes a mission profile.
    **/
    deleteMissionProfile(req: operations.DeleteMissionProfileRequest, config?: AxiosRequestConfig): Promise<operations.DeleteMissionProfileResponse>;
    /**
     * describeContact - Describes an existing contact.
    **/
    describeContact(req: operations.DescribeContactRequest, config?: AxiosRequestConfig): Promise<operations.DescribeContactResponse>;
    /**
     * getConfig - <p>Returns <code>Config</code> information.</p> <p>Only one <code>Config</code> response can be returned.</p>
    **/
    getConfig(req: operations.GetConfigRequest, config?: AxiosRequestConfig): Promise<operations.GetConfigResponse>;
    /**
     * getDataflowEndpointGroup - Returns the dataflow endpoint group.
    **/
    getDataflowEndpointGroup(req: operations.GetDataflowEndpointGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetDataflowEndpointGroupResponse>;
    /**
     * getMinuteUsage - Returns the number of minutes used by account.
    **/
    getMinuteUsage(req: operations.GetMinuteUsageRequest, config?: AxiosRequestConfig): Promise<operations.GetMinuteUsageResponse>;
    /**
     * getMissionProfile - Returns a mission profile.
    **/
    getMissionProfile(req: operations.GetMissionProfileRequest, config?: AxiosRequestConfig): Promise<operations.GetMissionProfileResponse>;
    /**
     * getSatellite - Returns a satellite.
    **/
    getSatellite(req: operations.GetSatelliteRequest, config?: AxiosRequestConfig): Promise<operations.GetSatelliteResponse>;
    /**
     * listConfigs - Returns a list of <code>Config</code> objects.
    **/
    listConfigs(req: operations.ListConfigsRequest, config?: AxiosRequestConfig): Promise<operations.ListConfigsResponse>;
    /**
     * listContacts - <p>Returns a list of contacts.</p> <p>If <code>statusList</code> contains AVAILABLE, the request must include <code>groundStation</code>, <code>missionprofileArn</code>, and <code>satelliteArn</code>. </p>
    **/
    listContacts(req: operations.ListContactsRequest, config?: AxiosRequestConfig): Promise<operations.ListContactsResponse>;
    /**
     * listDataflowEndpointGroups - Returns a list of <code>DataflowEndpoint</code> groups.
    **/
    listDataflowEndpointGroups(req: operations.ListDataflowEndpointGroupsRequest, config?: AxiosRequestConfig): Promise<operations.ListDataflowEndpointGroupsResponse>;
    /**
     * listGroundStations - Returns a list of ground stations.
    **/
    listGroundStations(req: operations.ListGroundStationsRequest, config?: AxiosRequestConfig): Promise<operations.ListGroundStationsResponse>;
    /**
     * listMissionProfiles - Returns a list of mission profiles.
    **/
    listMissionProfiles(req: operations.ListMissionProfilesRequest, config?: AxiosRequestConfig): Promise<operations.ListMissionProfilesResponse>;
    /**
     * listSatellites - Returns a list of satellites.
    **/
    listSatellites(req: operations.ListSatellitesRequest, config?: AxiosRequestConfig): Promise<operations.ListSatellitesResponse>;
    /**
     * listTagsForResource - Returns a list of tags for a specified resource.
    **/
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * reserveContact - Reserves a contact using specified parameters.
    **/
    reserveContact(req: operations.ReserveContactRequest, config?: AxiosRequestConfig): Promise<operations.ReserveContactResponse>;
    /**
     * tagResource - Assigns a tag to a resource.
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * untagResource - Deassigns a resource tag.
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * updateConfig - <p>Updates the <code>Config</code> used when scheduling contacts.</p> <p>Updating a <code>Config</code> will not update the execution parameters for existing future contacts scheduled with this <code>Config</code>.</p>
    **/
    updateConfig(req: operations.UpdateConfigRequest, config?: AxiosRequestConfig): Promise<operations.UpdateConfigResponse>;
    /**
     * updateMissionProfile - <p>Updates a mission profile.</p> <p>Updating a mission profile will not update the execution parameters for existing future contacts.</p>
    **/
    updateMissionProfile(req: operations.UpdateMissionProfileRequest, config?: AxiosRequestConfig): Promise<operations.UpdateMissionProfileResponse>;
}
export {};
