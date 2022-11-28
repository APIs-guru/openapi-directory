import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://directconnect.{region}.amazonaws.com", "https://directconnect.{region}.amazonaws.com", "http://directconnect.{region}.amazonaws.com.cn", "https://directconnect.{region}.amazonaws.com.cn"];
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
     * acceptDirectConnectGatewayAssociationProposal - Accepts a proposal request to attach a virtual private gateway or transit gateway to a Direct Connect gateway.
    **/
    acceptDirectConnectGatewayAssociationProposal(req: operations.AcceptDirectConnectGatewayAssociationProposalRequest, config?: AxiosRequestConfig): Promise<operations.AcceptDirectConnectGatewayAssociationProposalResponse>;
    /**
     * allocateConnectionOnInterconnect - <p>Deprecated. Use <a>AllocateHostedConnection</a> instead.</p> <p>Creates a hosted connection on an interconnect.</p> <p>Allocates a VLAN number and a specified amount of bandwidth for use by a hosted connection on the specified interconnect.</p> <note> <p>Intended for use by Direct Connect Partners only.</p> </note>
    **/
    allocateConnectionOnInterconnect(req: operations.AllocateConnectionOnInterconnectRequest, config?: AxiosRequestConfig): Promise<operations.AllocateConnectionOnInterconnectResponse>;
    /**
     * allocateHostedConnection - <p>Creates a hosted connection on the specified interconnect or a link aggregation group (LAG) of interconnects.</p> <p>Allocates a VLAN number and a specified amount of capacity (bandwidth) for use by a hosted connection on the specified interconnect or LAG of interconnects. Amazon Web Services polices the hosted connection for the specified capacity and the Direct Connect Partner must also police the hosted connection for the specified capacity.</p> <note> <p>Intended for use by Direct Connect Partners only.</p> </note>
    **/
    allocateHostedConnection(req: operations.AllocateHostedConnectionRequest, config?: AxiosRequestConfig): Promise<operations.AllocateHostedConnectionResponse>;
    /**
     * allocatePrivateVirtualInterface - <p>Provisions a private virtual interface to be owned by the specified account.</p> <p>Virtual interfaces created using this action must be confirmed by the owner using <a>ConfirmPrivateVirtualInterface</a>. Until then, the virtual interface is in the <code>Confirming</code> state and is not available to handle traffic.</p>
    **/
    allocatePrivateVirtualInterface(req: operations.AllocatePrivateVirtualInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.AllocatePrivateVirtualInterfaceResponse>;
    /**
     * allocatePublicVirtualInterface - <p>Provisions a public virtual interface to be owned by the specified account.</p> <p>The owner of a connection calls this function to provision a public virtual interface to be owned by the specified account.</p> <p>Virtual interfaces created using this function must be confirmed by the owner using <a>ConfirmPublicVirtualInterface</a>. Until this step has been completed, the virtual interface is in the <code>confirming</code> state and is not available to handle traffic.</p> <p>When creating an IPv6 public virtual interface, omit the Amazon address and customer address. IPv6 addresses are automatically assigned from the Amazon pool of IPv6 addresses; you cannot specify custom IPv6 addresses.</p>
    **/
    allocatePublicVirtualInterface(req: operations.AllocatePublicVirtualInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.AllocatePublicVirtualInterfaceResponse>;
    /**
     * allocateTransitVirtualInterface - <p>Provisions a transit virtual interface to be owned by the specified account. Use this type of interface to connect a transit gateway to your Direct Connect gateway.</p> <p>The owner of a connection provisions a transit virtual interface to be owned by the specified account.</p> <p>After you create a transit virtual interface, it must be confirmed by the owner using <a>ConfirmTransitVirtualInterface</a>. Until this step has been completed, the transit virtual interface is in the <code>requested</code> state and is not available to handle traffic.</p>
    **/
    allocateTransitVirtualInterface(req: operations.AllocateTransitVirtualInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.AllocateTransitVirtualInterfaceResponse>;
    /**
     * associateConnectionWithLag - <p>Associates an existing connection with a link aggregation group (LAG). The connection is interrupted and re-established as a member of the LAG (connectivity to Amazon Web Services is interrupted). The connection must be hosted on the same Direct Connect endpoint as the LAG, and its bandwidth must match the bandwidth for the LAG. You can re-associate a connection that's currently associated with a different LAG; however, if removing the connection would cause the original LAG to fall below its setting for minimum number of operational connections, the request fails.</p> <p>Any virtual interfaces that are directly associated with the connection are automatically re-associated with the LAG. If the connection was originally associated with a different LAG, the virtual interfaces remain associated with the original LAG.</p> <p>For interconnects, any hosted connections are automatically re-associated with the LAG. If the interconnect was originally associated with a different LAG, the hosted connections remain associated with the original LAG.</p>
    **/
    associateConnectionWithLag(req: operations.AssociateConnectionWithLagRequest, config?: AxiosRequestConfig): Promise<operations.AssociateConnectionWithLagResponse>;
    /**
     * associateHostedConnection - <p>Associates a hosted connection and its virtual interfaces with a link aggregation group (LAG) or interconnect. If the target interconnect or LAG has an existing hosted connection with a conflicting VLAN number or IP address, the operation fails. This action temporarily interrupts the hosted connection's connectivity to Amazon Web Services as it is being migrated.</p> <note> <p>Intended for use by Direct Connect Partners only.</p> </note>
    **/
    associateHostedConnection(req: operations.AssociateHostedConnectionRequest, config?: AxiosRequestConfig): Promise<operations.AssociateHostedConnectionResponse>;
    /**
     * associateMacSecKey - <p>Associates a MAC Security (MACsec) Connection Key Name (CKN)/ Connectivity Association Key (CAK) pair with an Direct Connect dedicated connection.</p> <p>You must supply either the <code>secretARN,</code> or the CKN/CAK (<code>ckn</code> and <code>cak</code>) pair in the request.</p> <p>For information about MAC Security (MACsec) key considerations, see <a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/direct-connect-mac-sec-getting-started.html#mac-sec-key-consideration">MACsec pre-shared CKN/CAK key considerations </a> in the <i>Direct Connect User Guide</i>.</p>
    **/
    associateMacSecKey(req: operations.AssociateMacSecKeyRequest, config?: AxiosRequestConfig): Promise<operations.AssociateMacSecKeyResponse>;
    /**
     * associateVirtualInterface - <p>Associates a virtual interface with a specified link aggregation group (LAG) or connection. Connectivity to Amazon Web Services is temporarily interrupted as the virtual interface is being migrated. If the target connection or LAG has an associated virtual interface with a conflicting VLAN number or a conflicting IP address, the operation fails.</p> <p>Virtual interfaces associated with a hosted connection cannot be associated with a LAG; hosted connections must be migrated along with their virtual interfaces using <a>AssociateHostedConnection</a>.</p> <p>To reassociate a virtual interface to a new connection or LAG, the requester must own either the virtual interface itself or the connection to which the virtual interface is currently associated. Additionally, the requester must own the connection or LAG for the association.</p>
    **/
    associateVirtualInterface(req: operations.AssociateVirtualInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.AssociateVirtualInterfaceResponse>;
    /**
     * confirmConnection - <p>Confirms the creation of the specified hosted connection on an interconnect.</p> <p>Upon creation, the hosted connection is initially in the <code>Ordering</code> state, and remains in this state until the owner confirms creation of the hosted connection.</p>
    **/
    confirmConnection(req: operations.ConfirmConnectionRequest, config?: AxiosRequestConfig): Promise<operations.ConfirmConnectionResponse>;
    /**
     * confirmPrivateVirtualInterface - <p>Accepts ownership of a private virtual interface created by another account.</p> <p>After the virtual interface owner makes this call, the virtual interface is created and attached to the specified virtual private gateway or Direct Connect gateway, and is made available to handle traffic.</p>
    **/
    confirmPrivateVirtualInterface(req: operations.ConfirmPrivateVirtualInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.ConfirmPrivateVirtualInterfaceResponse>;
    /**
     * confirmPublicVirtualInterface - <p>Accepts ownership of a public virtual interface created by another account.</p> <p>After the virtual interface owner makes this call, the specified virtual interface is created and made available to handle traffic.</p>
    **/
    confirmPublicVirtualInterface(req: operations.ConfirmPublicVirtualInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.ConfirmPublicVirtualInterfaceResponse>;
    /**
     * confirmTransitVirtualInterface - <p>Accepts ownership of a transit virtual interface created by another account.</p> <p> After the owner of the transit virtual interface makes this call, the specified transit virtual interface is created and made available to handle traffic.</p>
    **/
    confirmTransitVirtualInterface(req: operations.ConfirmTransitVirtualInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.ConfirmTransitVirtualInterfaceResponse>;
    /**
     * createBgpPeer - <p>Creates a BGP peer on the specified virtual interface.</p> <p>You must create a BGP peer for the corresponding address family (IPv4/IPv6) in order to access Amazon Web Services resources that also use that address family.</p> <p>If logical redundancy is not supported by the connection, interconnect, or LAG, the BGP peer cannot be in the same address family as an existing BGP peer on the virtual interface.</p> <p>When creating a IPv6 BGP peer, omit the Amazon address and customer address. IPv6 addresses are automatically assigned from the Amazon pool of IPv6 addresses; you cannot specify custom IPv6 addresses.</p> <p>For a public virtual interface, the Autonomous System Number (ASN) must be private or already on the allow list for the virtual interface.</p>
    **/
    createBgpPeer(req: operations.CreateBgpPeerRequest, config?: AxiosRequestConfig): Promise<operations.CreateBgpPeerResponse>;
    /**
     * createConnection - <p>Creates a connection between a customer network and a specific Direct Connect location.</p> <p>A connection links your internal network to an Direct Connect location over a standard Ethernet fiber-optic cable. One end of the cable is connected to your router, the other to an Direct Connect router.</p> <p>To find the locations for your Region, use <a>DescribeLocations</a>.</p> <p>You can automatically add the new connection to a link aggregation group (LAG) by specifying a LAG ID in the request. This ensures that the new connection is allocated on the same Direct Connect endpoint that hosts the specified LAG. If there are no available ports on the endpoint, the request fails and no connection is created.</p>
    **/
    createConnection(req: operations.CreateConnectionRequest, config?: AxiosRequestConfig): Promise<operations.CreateConnectionResponse>;
    /**
     * createDirectConnectGateway - Creates a Direct Connect gateway, which is an intermediate object that enables you to connect a set of virtual interfaces and virtual private gateways. A Direct Connect gateway is global and visible in any Region after it is created. The virtual interfaces and virtual private gateways that are connected through a Direct Connect gateway can be in different Regions. This enables you to connect to a VPC in any Region, regardless of the Region in which the virtual interfaces are located, and pass traffic between them.
    **/
    createDirectConnectGateway(req: operations.CreateDirectConnectGatewayRequest, config?: AxiosRequestConfig): Promise<operations.CreateDirectConnectGatewayResponse>;
    /**
     * createDirectConnectGatewayAssociation - Creates an association between a Direct Connect gateway and a virtual private gateway. The virtual private gateway must be attached to a VPC and must not be associated with another Direct Connect gateway.
    **/
    createDirectConnectGatewayAssociation(req: operations.CreateDirectConnectGatewayAssociationRequest, config?: AxiosRequestConfig): Promise<operations.CreateDirectConnectGatewayAssociationResponse>;
    /**
     * createDirectConnectGatewayAssociationProposal - <p>Creates a proposal to associate the specified virtual private gateway or transit gateway with the specified Direct Connect gateway.</p> <p>You can associate a Direct Connect gateway and virtual private gateway or transit gateway that is owned by any account. </p>
    **/
    createDirectConnectGatewayAssociationProposal(req: operations.CreateDirectConnectGatewayAssociationProposalRequest, config?: AxiosRequestConfig): Promise<operations.CreateDirectConnectGatewayAssociationProposalResponse>;
    /**
     * createInterconnect - <p>Creates an interconnect between an Direct Connect Partner's network and a specific Direct Connect location.</p> <p>An interconnect is a connection that is capable of hosting other connections. The Direct Connect Partner can use an interconnect to provide Direct Connect hosted connections to customers through their own network services. Like a standard connection, an interconnect links the partner's network to an Direct Connect location over a standard Ethernet fiber-optic cable. One end is connected to the partner's router, the other to an Direct Connect router.</p> <p>You can automatically add the new interconnect to a link aggregation group (LAG) by specifying a LAG ID in the request. This ensures that the new interconnect is allocated on the same Direct Connect endpoint that hosts the specified LAG. If there are no available ports on the endpoint, the request fails and no interconnect is created.</p> <p>For each end customer, the Direct Connect Partner provisions a connection on their interconnect by calling <a>AllocateHostedConnection</a>. The end customer can then connect to Amazon Web Services resources by creating a virtual interface on their connection, using the VLAN assigned to them by the Direct Connect Partner.</p> <note> <p>Intended for use by Direct Connect Partners only.</p> </note>
    **/
    createInterconnect(req: operations.CreateInterconnectRequest, config?: AxiosRequestConfig): Promise<operations.CreateInterconnectResponse>;
    /**
     * createLag - <p>Creates a link aggregation group (LAG) with the specified number of bundled physical dedicated connections between the customer network and a specific Direct Connect location. A LAG is a logical interface that uses the Link Aggregation Control Protocol (LACP) to aggregate multiple interfaces, enabling you to treat them as a single interface.</p> <p>All connections in a LAG must use the same bandwidth (either 1Gbps or 10Gbps) and must terminate at the same Direct Connect endpoint.</p> <p>You can have up to 10 dedicated connections per LAG. Regardless of this limit, if you request more connections for the LAG than Direct Connect can allocate on a single endpoint, no LAG is created.</p> <p>You can specify an existing physical dedicated connection or interconnect to include in the LAG (which counts towards the total number of connections). Doing so interrupts the current physical dedicated connection, and re-establishes them as a member of the LAG. The LAG will be created on the same Direct Connect endpoint to which the dedicated connection terminates. Any virtual interfaces associated with the dedicated connection are automatically disassociated and re-associated with the LAG. The connection ID does not change.</p> <p>If the account used to create a LAG is a registered Direct Connect Partner, the LAG is automatically enabled to host sub-connections. For a LAG owned by a partner, any associated virtual interfaces cannot be directly configured.</p>
    **/
    createLag(req: operations.CreateLagRequest, config?: AxiosRequestConfig): Promise<operations.CreateLagResponse>;
    /**
     * createPrivateVirtualInterface - <p>Creates a private virtual interface. A virtual interface is the VLAN that transports Direct Connect traffic. A private virtual interface can be connected to either a Direct Connect gateway or a Virtual Private Gateway (VGW). Connecting the private virtual interface to a Direct Connect gateway enables the possibility for connecting to multiple VPCs, including VPCs in different Regions. Connecting the private virtual interface to a VGW only provides access to a single VPC within the same Region.</p> <p>Setting the MTU of a virtual interface to 9001 (jumbo frames) can cause an update to the underlying physical connection if it wasn't updated to support jumbo frames. Updating the connection disrupts network connectivity for all virtual interfaces associated with the connection for up to 30 seconds. To check whether your connection supports jumbo frames, call <a>DescribeConnections</a>. To check whether your virtual interface supports jumbo frames, call <a>DescribeVirtualInterfaces</a>.</p>
    **/
    createPrivateVirtualInterface(req: operations.CreatePrivateVirtualInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.CreatePrivateVirtualInterfaceResponse>;
    /**
     * createPublicVirtualInterface - <p>Creates a public virtual interface. A virtual interface is the VLAN that transports Direct Connect traffic. A public virtual interface supports sending traffic to public services of Amazon Web Services such as Amazon S3.</p> <p>When creating an IPv6 public virtual interface (<code>addressFamily</code> is <code>ipv6</code>), leave the <code>customer</code> and <code>amazon</code> address fields blank to use auto-assigned IPv6 space. Custom IPv6 addresses are not supported.</p>
    **/
    createPublicVirtualInterface(req: operations.CreatePublicVirtualInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.CreatePublicVirtualInterfaceResponse>;
    /**
     * createTransitVirtualInterface - <p>Creates a transit virtual interface. A transit virtual interface should be used to access one or more transit gateways associated with Direct Connect gateways. A transit virtual interface enables the connection of multiple VPCs attached to a transit gateway to a Direct Connect gateway.</p> <important> <p>If you associate your transit gateway with one or more Direct Connect gateways, the Autonomous System Number (ASN) used by the transit gateway and the Direct Connect gateway must be different. For example, if you use the default ASN 64512 for both your the transit gateway and Direct Connect gateway, the association request fails.</p> </important> <p>Setting the MTU of a virtual interface to 8500 (jumbo frames) can cause an update to the underlying physical connection if it wasn't updated to support jumbo frames. Updating the connection disrupts network connectivity for all virtual interfaces associated with the connection for up to 30 seconds. To check whether your connection supports jumbo frames, call <a>DescribeConnections</a>. To check whether your virtual interface supports jumbo frames, call <a>DescribeVirtualInterfaces</a>.</p>
    **/
    createTransitVirtualInterface(req: operations.CreateTransitVirtualInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.CreateTransitVirtualInterfaceResponse>;
    /**
     * deleteBgpPeer - <p>Deletes the specified BGP peer on the specified virtual interface with the specified customer address and ASN.</p> <p>You cannot delete the last BGP peer from a virtual interface.</p>
    **/
    deleteBgpPeer(req: operations.DeleteBgpPeerRequest, config?: AxiosRequestConfig): Promise<operations.DeleteBgpPeerResponse>;
    /**
     * deleteConnection - <p>Deletes the specified connection.</p> <p>Deleting a connection only stops the Direct Connect port hour and data transfer charges. If you are partnering with any third parties to connect with the Direct Connect location, you must cancel your service with them separately.</p>
    **/
    deleteConnection(req: operations.DeleteConnectionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteConnectionResponse>;
    /**
     * deleteDirectConnectGateway - Deletes the specified Direct Connect gateway. You must first delete all virtual interfaces that are attached to the Direct Connect gateway and disassociate all virtual private gateways associated with the Direct Connect gateway.
    **/
    deleteDirectConnectGateway(req: operations.DeleteDirectConnectGatewayRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDirectConnectGatewayResponse>;
    /**
     * deleteDirectConnectGatewayAssociation - <p>Deletes the association between the specified Direct Connect gateway and virtual private gateway.</p> <p>We recommend that you specify the <code>associationID</code> to delete the association. Alternatively, if you own virtual gateway and a Direct Connect gateway association, you can specify the <code>virtualGatewayId</code> and <code>directConnectGatewayId</code> to delete an association.</p>
    **/
    deleteDirectConnectGatewayAssociation(req: operations.DeleteDirectConnectGatewayAssociationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDirectConnectGatewayAssociationResponse>;
    /**
     * deleteDirectConnectGatewayAssociationProposal - Deletes the association proposal request between the specified Direct Connect gateway and virtual private gateway or transit gateway.
    **/
    deleteDirectConnectGatewayAssociationProposal(req: operations.DeleteDirectConnectGatewayAssociationProposalRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDirectConnectGatewayAssociationProposalResponse>;
    /**
     * deleteInterconnect - <p>Deletes the specified interconnect.</p> <note> <p>Intended for use by Direct Connect Partners only.</p> </note>
    **/
    deleteInterconnect(req: operations.DeleteInterconnectRequest, config?: AxiosRequestConfig): Promise<operations.DeleteInterconnectResponse>;
    /**
     * deleteLag - Deletes the specified link aggregation group (LAG). You cannot delete a LAG if it has active virtual interfaces or hosted connections.
    **/
    deleteLag(req: operations.DeleteLagRequest, config?: AxiosRequestConfig): Promise<operations.DeleteLagResponse>;
    /**
     * deleteVirtualInterface - Deletes a virtual interface.
    **/
    deleteVirtualInterface(req: operations.DeleteVirtualInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteVirtualInterfaceResponse>;
    /**
     * describeConnectionLoa - <p>Deprecated. Use <a>DescribeLoa</a> instead.</p> <p>Gets the LOA-CFA for a connection.</p> <p>The Letter of Authorization - Connecting Facility Assignment (LOA-CFA) is a document that your APN partner or service provider uses when establishing your cross connect to Amazon Web Services at the colocation facility. For more information, see <a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/Colocation.html">Requesting Cross Connects at Direct Connect Locations</a> in the <i>Direct Connect User Guide</i>.</p>
    **/
    describeConnectionLoa(req: operations.DescribeConnectionLoaRequest, config?: AxiosRequestConfig): Promise<operations.DescribeConnectionLoaResponse>;
    /**
     * describeConnections - Displays the specified connection or all connections in this Region.
    **/
    describeConnections(req: operations.DescribeConnectionsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeConnectionsResponse>;
    /**
     * describeConnectionsOnInterconnect - <p>Deprecated. Use <a>DescribeHostedConnections</a> instead.</p> <p>Lists the connections that have been provisioned on the specified interconnect.</p> <note> <p>Intended for use by Direct Connect Partners only.</p> </note>
    **/
    describeConnectionsOnInterconnect(req: operations.DescribeConnectionsOnInterconnectRequest, config?: AxiosRequestConfig): Promise<operations.DescribeConnectionsOnInterconnectResponse>;
    /**
     * describeDirectConnectGatewayAssociationProposals - Describes one or more association proposals for connection between a virtual private gateway or transit gateway and a Direct Connect gateway.
    **/
    describeDirectConnectGatewayAssociationProposals(req: operations.DescribeDirectConnectGatewayAssociationProposalsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeDirectConnectGatewayAssociationProposalsResponse>;
    /**
     * describeDirectConnectGatewayAssociations - <p>Lists the associations between your Direct Connect gateways and virtual private gateways and transit gateways. You must specify one of the following:</p> <ul> <li> <p>A Direct Connect gateway</p> <p>The response contains all virtual private gateways and transit gateways associated with the Direct Connect gateway.</p> </li> <li> <p>A virtual private gateway</p> <p>The response contains the Direct Connect gateway.</p> </li> <li> <p>A transit gateway</p> <p>The response contains the Direct Connect gateway.</p> </li> <li> <p>A Direct Connect gateway and a virtual private gateway</p> <p>The response contains the association between the Direct Connect gateway and virtual private gateway.</p> </li> <li> <p>A Direct Connect gateway and a transit gateway</p> <p>The response contains the association between the Direct Connect gateway and transit gateway.</p> </li> </ul>
    **/
    describeDirectConnectGatewayAssociations(req: operations.DescribeDirectConnectGatewayAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeDirectConnectGatewayAssociationsResponse>;
    /**
     * describeDirectConnectGatewayAttachments - Lists the attachments between your Direct Connect gateways and virtual interfaces. You must specify a Direct Connect gateway, a virtual interface, or both. If you specify a Direct Connect gateway, the response contains all virtual interfaces attached to the Direct Connect gateway. If you specify a virtual interface, the response contains all Direct Connect gateways attached to the virtual interface. If you specify both, the response contains the attachment between the Direct Connect gateway and the virtual interface.
    **/
    describeDirectConnectGatewayAttachments(req: operations.DescribeDirectConnectGatewayAttachmentsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeDirectConnectGatewayAttachmentsResponse>;
    /**
     * describeDirectConnectGateways - Lists all your Direct Connect gateways or only the specified Direct Connect gateway. Deleted Direct Connect gateways are not returned.
    **/
    describeDirectConnectGateways(req: operations.DescribeDirectConnectGatewaysRequest, config?: AxiosRequestConfig): Promise<operations.DescribeDirectConnectGatewaysResponse>;
    /**
     * describeHostedConnections - <p>Lists the hosted connections that have been provisioned on the specified interconnect or link aggregation group (LAG).</p> <note> <p>Intended for use by Direct Connect Partners only.</p> </note>
    **/
    describeHostedConnections(req: operations.DescribeHostedConnectionsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeHostedConnectionsResponse>;
    /**
     * describeInterconnectLoa - <p>Deprecated. Use <a>DescribeLoa</a> instead.</p> <p>Gets the LOA-CFA for the specified interconnect.</p> <p>The Letter of Authorization - Connecting Facility Assignment (LOA-CFA) is a document that is used when establishing your cross connect to Amazon Web Services at the colocation facility. For more information, see <a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/Colocation.html">Requesting Cross Connects at Direct Connect Locations</a> in the <i>Direct Connect User Guide</i>.</p>
    **/
    describeInterconnectLoa(req: operations.DescribeInterconnectLoaRequest, config?: AxiosRequestConfig): Promise<operations.DescribeInterconnectLoaResponse>;
    /**
     * describeInterconnects - Lists the interconnects owned by the account or only the specified interconnect.
    **/
    describeInterconnects(req: operations.DescribeInterconnectsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeInterconnectsResponse>;
    /**
     * describeLags - Describes all your link aggregation groups (LAG) or the specified LAG.
    **/
    describeLags(req: operations.DescribeLagsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeLagsResponse>;
    /**
     * describeLoa - <p>Gets the LOA-CFA for a connection, interconnect, or link aggregation group (LAG).</p> <p>The Letter of Authorization - Connecting Facility Assignment (LOA-CFA) is a document that is used when establishing your cross connect to Amazon Web Services at the colocation facility. For more information, see <a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/Colocation.html">Requesting Cross Connects at Direct Connect Locations</a> in the <i>Direct Connect User Guide</i>.</p>
    **/
    describeLoa(req: operations.DescribeLoaRequest, config?: AxiosRequestConfig): Promise<operations.DescribeLoaResponse>;
    /**
     * describeLocations - Lists the Direct Connect locations in the current Region. These are the locations that can be selected when calling <a>CreateConnection</a> or <a>CreateInterconnect</a>.
    **/
    describeLocations(req: operations.DescribeLocationsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeLocationsResponse>;
    /**
     * describeTags - Describes the tags associated with the specified Direct Connect resources.
    **/
    describeTags(req: operations.DescribeTagsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeTagsResponse>;
    /**
     * describeVirtualGateways - <p>Lists the virtual private gateways owned by the account.</p> <p>You can create one or more Direct Connect private virtual interfaces linked to a virtual private gateway.</p>
    **/
    describeVirtualGateways(req: operations.DescribeVirtualGatewaysRequest, config?: AxiosRequestConfig): Promise<operations.DescribeVirtualGatewaysResponse>;
    /**
     * describeVirtualInterfaces - <p>Displays all virtual interfaces for an account. Virtual interfaces deleted fewer than 15 minutes before you make the request are also returned. If you specify a connection ID, only the virtual interfaces associated with the connection are returned. If you specify a virtual interface ID, then only a single virtual interface is returned.</p> <p>A virtual interface (VLAN) transmits the traffic between the Direct Connect location and the customer network.</p>
    **/
    describeVirtualInterfaces(req: operations.DescribeVirtualInterfacesRequest, config?: AxiosRequestConfig): Promise<operations.DescribeVirtualInterfacesResponse>;
    /**
     * disassociateConnectionFromLag - <p>Disassociates a connection from a link aggregation group (LAG). The connection is interrupted and re-established as a standalone connection (the connection is not deleted; to delete the connection, use the <a>DeleteConnection</a> request). If the LAG has associated virtual interfaces or hosted connections, they remain associated with the LAG. A disassociated connection owned by an Direct Connect Partner is automatically converted to an interconnect.</p> <p>If disassociating the connection would cause the LAG to fall below its setting for minimum number of operational connections, the request fails, except when it's the last member of the LAG. If all connections are disassociated, the LAG continues to exist as an empty LAG with no physical connections. </p>
    **/
    disassociateConnectionFromLag(req: operations.DisassociateConnectionFromLagRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateConnectionFromLagResponse>;
    /**
     * disassociateMacSecKey - Removes the association between a MAC Security (MACsec) security key and an Direct Connect dedicated connection.
    **/
    disassociateMacSecKey(req: operations.DisassociateMacSecKeyRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateMacSecKeyResponse>;
    /**
     * listVirtualInterfaceTestHistory - Lists the virtual interface failover test history.
    **/
    listVirtualInterfaceTestHistory(req: operations.ListVirtualInterfaceTestHistoryRequest, config?: AxiosRequestConfig): Promise<operations.ListVirtualInterfaceTestHistoryResponse>;
    /**
     * startBgpFailoverTest - <p>Starts the virtual interface failover test that verifies your configuration meets your resiliency requirements by placing the BGP peering session in the DOWN state. You can then send traffic to verify that there are no outages.</p> <p>You can run the test on public, private, transit, and hosted virtual interfaces.</p> <p>You can use <a href="https://docs.aws.amazon.com/directconnect/latest/APIReference/API_ListVirtualInterfaceTestHistory.html">ListVirtualInterfaceTestHistory</a> to view the virtual interface test history.</p> <p>If you need to stop the test before the test interval completes, use <a href="https://docs.aws.amazon.com/directconnect/latest/APIReference/API_StopBgpFailoverTest.html">StopBgpFailoverTest</a>.</p>
    **/
    startBgpFailoverTest(req: operations.StartBgpFailoverTestRequest, config?: AxiosRequestConfig): Promise<operations.StartBgpFailoverTestResponse>;
    /**
     * stopBgpFailoverTest - Stops the virtual interface failover test.
    **/
    stopBgpFailoverTest(req: operations.StopBgpFailoverTestRequest, config?: AxiosRequestConfig): Promise<operations.StopBgpFailoverTestResponse>;
    /**
     * tagResource - <p>Adds the specified tags to the specified Direct Connect resource. Each resource can have a maximum of 50 tags.</p> <p>Each tag consists of a key and an optional value. If a tag with the same key is already associated with the resource, this action updates its value.</p>
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * untagResource - Removes one or more tags from the specified Direct Connect resource.
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * updateConnection - <p>Updates the Direct Connect dedicated connection configuration.</p> <p>You can update the following parameters for a connection:</p> <ul> <li> <p>The connection name</p> </li> <li> <p>The connection's MAC Security (MACsec) encryption mode.</p> </li> </ul>
    **/
    updateConnection(req: operations.UpdateConnectionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateConnectionResponse>;
    /**
     * updateDirectConnectGatewayAssociation - <p>Updates the specified attributes of the Direct Connect gateway association.</p> <p>Add or remove prefixes from the association.</p>
    **/
    updateDirectConnectGatewayAssociation(req: operations.UpdateDirectConnectGatewayAssociationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDirectConnectGatewayAssociationResponse>;
    /**
     * updateLag - <p>Updates the attributes of the specified link aggregation group (LAG).</p> <p>You can update the following LAG attributes:</p> <ul> <li> <p>The name of the LAG.</p> </li> <li> <p>The value for the minimum number of connections that must be operational for the LAG itself to be operational. </p> </li> <li> <p>The LAG's MACsec encryption mode.</p> <p>Amazon Web Services assigns this value to each connection which is part of the LAG.</p> </li> <li> <p>The tags</p> </li> </ul> <note> <p>If you adjust the threshold value for the minimum number of operational connections, ensure that the new value does not cause the LAG to fall below the threshold and become non-operational.</p> </note>
    **/
    updateLag(req: operations.UpdateLagRequest, config?: AxiosRequestConfig): Promise<operations.UpdateLagResponse>;
    /**
     * updateVirtualInterfaceAttributes - <p>Updates the specified attributes of the specified virtual private interface.</p> <p>Setting the MTU of a virtual interface to 9001 (jumbo frames) can cause an update to the underlying physical connection if it wasn't updated to support jumbo frames. Updating the connection disrupts network connectivity for all virtual interfaces associated with the connection for up to 30 seconds. To check whether your connection supports jumbo frames, call <a>DescribeConnections</a>. To check whether your virtual q interface supports jumbo frames, call <a>DescribeVirtualInterfaces</a>.</p>
    **/
    updateVirtualInterfaceAttributes(req: operations.UpdateVirtualInterfaceAttributesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateVirtualInterfaceAttributesResponse>;
}
export {};
