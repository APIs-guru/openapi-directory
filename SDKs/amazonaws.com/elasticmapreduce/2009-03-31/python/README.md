# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        hmac=shared.SchemeHmac(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.AddInstanceFleetRequest(
    headers=operations.AddInstanceFleetHeaders(
        x_amz_algorithm="ipsam",
        x_amz_content_sha256="sed",
        x_amz_credential="nihil",
        x_amz_date="harum",
        x_amz_security_token="quisquam",
        x_amz_signature="expedita",
        x_amz_signed_headers="et",
        x_amz_target="ElasticMapReduce.AddInstanceFleet",
    ),
    request=shared.AddInstanceFleetInput(
        cluster_id="omnis",
        instance_fleet=shared.InstanceFleetConfig(
            instance_fleet_type="TASK",
            instance_type_configs=[
                shared.InstanceTypeConfig(
                    bid_price="vel",
                    bid_price_as_percentage_of_on_demand_price=66.099998,
                    configurations=[
                        shared.Configuration(
                            classification="dolor",
                            configurations=[
                                shared.Configuration(
                                
                                ),
                                shared.Configuration(
                                
                                ),
                            ],
                            properties={
                                "iure": "ratione",
                                "est": "sed",
                            },
                        ),
                        shared.Configuration(
                            classification="quibusdam",
                            configurations=[
                                shared.Configuration(
                                
                                ),
                            ],
                            properties={
                                "aperiam": "molestiae",
                                "voluptatem": "impedit",
                                "debitis": "quae",
                            },
                        ),
                    ],
                    custom_ami_id="rerum",
                    ebs_configuration=shared.EbsConfiguration(
                        ebs_block_device_configs=[
                            shared.EbsBlockDeviceConfig(
                                volume_specification=shared.VolumeSpecification(
                                    iops=3216691657536674102,
                                    size_in_gb=4614335782559041675,
                                    volume_type="et",
                                ),
                                volumes_per_instance=5813021029411926225,
                            ),
                        ],
                        ebs_optimized=False,
                    ),
                    instance_type="perspiciatis",
                    weighted_capacity=8793714681839492093,
                ),
                shared.InstanceTypeConfig(
                    bid_price="voluptatem",
                    bid_price_as_percentage_of_on_demand_price=8.100000,
                    configurations=[
                        shared.Configuration(
                            classification="facilis",
                            configurations=[
                                shared.Configuration(
                                
                                ),
                            ],
                            properties={
                                "quia": "et",
                            },
                        ),
                        shared.Configuration(
                            classification="dicta",
                            configurations=[
                                shared.Configuration(
                                
                                ),
                                shared.Configuration(
                                
                                ),
                            ],
                            properties={
                                "nostrum": "illo",
                                "eos": "sit",
                                "et": "sed",
                            },
                        ),
                        shared.Configuration(
                            classification="ut",
                            configurations=[
                                shared.Configuration(
                                
                                ),
                            ],
                            properties={
                                "sed": "odio",
                                "deserunt": "harum",
                            },
                        ),
                    ],
                    custom_ami_id="est",
                    ebs_configuration=shared.EbsConfiguration(
                        ebs_block_device_configs=[
                            shared.EbsBlockDeviceConfig(
                                volume_specification=shared.VolumeSpecification(
                                    iops=4993198595586814427,
                                    size_in_gb=3122785695031542253,
                                    volume_type="eum",
                                ),
                                volumes_per_instance=1284074949319642297,
                            ),
                            shared.EbsBlockDeviceConfig(
                                volume_specification=shared.VolumeSpecification(
                                    iops=7615926039275672129,
                                    size_in_gb=6565391940532558866,
                                    volume_type="cupiditate",
                                ),
                                volumes_per_instance=6260354254715692349,
                            ),
                        ],
                        ebs_optimized=True,
                    ),
                    instance_type="nesciunt",
                    weighted_capacity=7846832054114073088,
                ),
                shared.InstanceTypeConfig(
                    bid_price="iure",
                    bid_price_as_percentage_of_on_demand_price=70.099998,
                    configurations=[
                        shared.Configuration(
                            classification="est",
                            configurations=[
                                shared.Configuration(
                                
                                ),
                                shared.Configuration(
                                
                                ),
                            ],
                            properties={
                                "incidunt": "distinctio",
                                "est": "necessitatibus",
                            },
                        ),
                        shared.Configuration(
                            classification="ut",
                            configurations=[
                                shared.Configuration(
                                
                                ),
                            ],
                            properties={
                                "eos": "perferendis",
                                "et": "unde",
                            },
                        ),
                    ],
                    custom_ami_id="ullam",
                    ebs_configuration=shared.EbsConfiguration(
                        ebs_block_device_configs=[
                            shared.EbsBlockDeviceConfig(
                                volume_specification=shared.VolumeSpecification(
                                    iops=6949352000225615228,
                                    size_in_gb=8709555160005361555,
                                    volume_type="ipsa",
                                ),
                                volumes_per_instance=2919094809757002615,
                            ),
                        ],
                        ebs_optimized=True,
                    ),
                    instance_type="sed",
                    weighted_capacity=2215142818503203503,
                ),
            ],
            launch_specifications=shared.InstanceFleetProvisioningSpecifications(
                on_demand_specification=shared.OnDemandProvisioningSpecification(
                    allocation_strategy="lowest-price",
                    capacity_reservation_options=shared.OnDemandCapacityReservationOptions(
                        capacity_reservation_preference="none",
                        capacity_reservation_resource_group_arn="nam",
                        usage_strategy="use-capacity-reservations-first",
                    ),
                ),
                spot_specification=shared.SpotProvisioningSpecification(
                    allocation_strategy="capacity-optimized",
                    block_duration_minutes=3429961494119371688,
                    timeout_action="TERMINATE_CLUSTER",
                    timeout_duration_minutes=3933413289889308221,
                ),
            ),
            name="repellat",
            target_on_demand_capacity=380240274124921430,
            target_spot_capacity=3873808484953935464,
        ),
    ),
)
    
res = s.sdk.add_instance_fleet(req)

if res.add_instance_fleet_output is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `add_instance_fleet` - <p>Adds an instance fleet to a running cluster.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x.</p> </note>
* `add_instance_groups` - Adds one or more instance groups to a running cluster.
* `add_job_flow_steps` - <p>AddJobFlowSteps adds new steps to a running cluster. A maximum of 256 steps are allowed in each job flow.</p> <p>If your cluster is long-running (such as a Hive data warehouse) or complex, you may require more than 256 steps to process your data. You can bypass the 256-step limitation in various ways, including using SSH to connect to the master node and submitting queries directly to the software running on the master node, such as Hive and Hadoop. For more information on how to do this, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/AddMoreThan256Steps.html">Add More than 256 Steps to a Cluster</a> in the <i>Amazon EMR Management Guide</i>.</p> <p>A step specifies the location of a JAR file stored either on the master node of the cluster or in Amazon S3. Each step is performed by the main function of the main class of the JAR file. The main class can be specified either in the manifest of the JAR or by using the MainFunction parameter of the step.</p> <p>Amazon EMR executes each step in the order listed. For a step to be considered complete, the main function must exit with a zero exit code and all Hadoop jobs started while the step was running must have completed and run successfully.</p> <p>You can only add steps to a cluster that is in one of the following states: STARTING, BOOTSTRAPPING, RUNNING, or WAITING.</p>
* `add_tags` - Adds tags to an Amazon EMR resource, such as a cluster or an Amazon EMR Studio. Tags make it easier to associate resources in various ways, such as grouping clusters to track your Amazon EMR resource allocation costs. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-tags.html">Tag Clusters</a>. 
* `cancel_steps` - Cancels a pending step or steps in a running cluster. Available only in Amazon EMR versions 4.8.0 and later, excluding version 5.0.0. A maximum of 256 steps are allowed in each CancelSteps request. CancelSteps is idempotent but asynchronous; it does not guarantee that a step will be canceled, even if the request is successfully submitted. When you use Amazon EMR versions 5.28.0 and later, you can cancel steps that are in a <code>PENDING</code> or <code>RUNNING</code> state. In earlier versions of Amazon EMR, you can only cancel steps that are in a <code>PENDING</code> state. 
* `create_security_configuration` - Creates a security configuration, which is stored in the service and can be specified when a cluster is created.
* `create_studio` - Creates a new Amazon EMR Studio.
* `create_studio_session_mapping` - Maps a user or group to the Amazon EMR Studio specified by <code>StudioId</code>, and applies a session policy to refine Studio permissions for that user or group. Use <code>CreateStudioSessionMapping</code> to assign users to a Studio when you use Amazon Web Services SSO authentication. For instructions on how to assign users to a Studio when you use IAM authentication, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio-manage-users.html#emr-studio-assign-users-groups">Assign a user or group to your EMR Studio</a>.
* `delete_security_configuration` - Deletes a security configuration.
* `delete_studio` - Removes an Amazon EMR Studio from the Studio metadata store.
* `delete_studio_session_mapping` - Removes a user or group from an Amazon EMR Studio.
* `describe_cluster` - Provides cluster-level details including status, hardware and software configuration, VPC settings, and so on.
* `describe_job_flows` - <p>This API is no longer supported and will eventually be removed. We recommend you use <a>ListClusters</a>, <a>DescribeCluster</a>, <a>ListSteps</a>, <a>ListInstanceGroups</a> and <a>ListBootstrapActions</a> instead.</p> <p>DescribeJobFlows returns a list of job flows that match all of the supplied parameters. The parameters can include a list of job flow IDs, job flow states, and restrictions on job flow creation date and time.</p> <p>Regardless of supplied parameters, only job flows created within the last two months are returned.</p> <p>If no parameters are supplied, then job flows matching either of the following criteria are returned:</p> <ul> <li> <p>Job flows created and completed in the last two weeks</p> </li> <li> <p> Job flows created within the last two months that are in one of the following states: <code>RUNNING</code>, <code>WAITING</code>, <code>SHUTTING_DOWN</code>, <code>STARTING</code> </p> </li> </ul> <p>Amazon EMR can return a maximum of 512 job flow descriptions.</p>
* `describe_notebook_execution` - Provides details of a notebook execution.
* `describe_release_label` - Provides EMR release label details, such as releases available the region where the API request is run, and the available applications for a specific EMR release label. Can also list EMR release versions that support a specified version of Spark.
* `describe_security_configuration` - Provides the details of a security configuration by returning the configuration JSON.
* `describe_step` - Provides more detail about the cluster step.
* `describe_studio` - Returns details for the specified Amazon EMR Studio including ID, Name, VPC, Studio access URL, and so on.
* `get_auto_termination_policy` - Returns the auto-termination policy for an Amazon EMR cluster.
* `get_block_public_access_configuration` - Returns the Amazon EMR block public access configuration for your Amazon Web Services account in the current Region. For more information see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/configure-block-public-access.html">Configure Block Public Access for Amazon EMR</a> in the <i>Amazon EMR Management Guide</i>.
* `get_managed_scaling_policy` - Fetches the attached managed scaling policy for an Amazon EMR cluster. 
* `get_studio_session_mapping` - Fetches mapping details for the specified Amazon EMR Studio and identity (user or group).
* `list_bootstrap_actions` - Provides information about the bootstrap actions associated with a cluster.
* `list_clusters` - Provides the status of all clusters visible to this Amazon Web Services account. Allows you to filter the list of clusters based on certain criteria; for example, filtering by cluster creation date and time or by status. This call returns a maximum of 50 clusters in unsorted order per call, but returns a marker to track the paging of the cluster list across multiple ListClusters calls.
* `list_instance_fleets` - <p>Lists all available details about the instance fleets in a cluster.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>
* `list_instance_groups` - Provides all available details about the instance groups in a cluster.
* `list_instances` - Provides information for all active EC2 instances and EC2 instances terminated in the last 30 days, up to a maximum of 2,000. EC2 instances in any of the following states are considered active: AWAITING_FULFILLMENT, PROVISIONING, BOOTSTRAPPING, RUNNING.
* `list_notebook_executions` - Provides summaries of all notebook executions. You can filter the list based on multiple criteria such as status, time range, and editor id. Returns a maximum of 50 notebook executions and a marker to track the paging of a longer notebook execution list across multiple <code>ListNotebookExecution</code> calls.
* `list_release_labels` - Retrieves release labels of EMR services in the region where the API is called.
* `list_security_configurations` - Lists all the security configurations visible to this account, providing their creation dates and times, and their names. This call returns a maximum of 50 clusters per call, but returns a marker to track the paging of the cluster list across multiple ListSecurityConfigurations calls.
* `list_steps` - Provides a list of steps for the cluster in reverse order unless you specify <code>stepIds</code> with the request or filter by <code>StepStates</code>. You can specify a maximum of 10 <code>stepIDs</code>. The CLI automatically paginates results to return a list greater than 50 steps. To return more than 50 steps using the CLI, specify a <code>Marker</code>, which is a pagination token that indicates the next set of steps to retrieve.
* `list_studio_session_mappings` - Returns a list of all user or group session mappings for the Amazon EMR Studio specified by <code>StudioId</code>.
* `list_studios` - Returns a list of all Amazon EMR Studios associated with the Amazon Web Services account. The list includes details such as ID, Studio Access URL, and creation time for each Studio.
* `modify_cluster` - Modifies the number of steps that can be executed concurrently for the cluster specified using ClusterID.
* `modify_instance_fleet` - <p>Modifies the target On-Demand and target Spot capacities for the instance fleet with the specified InstanceFleetID within the cluster specified using ClusterID. The call either succeeds or fails atomically.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>
* `modify_instance_groups` - ModifyInstanceGroups modifies the number of nodes and configuration settings of an instance group. The input parameters include the new target instance count for the group and the instance group ID. The call will either succeed or fail atomically.
* `put_auto_scaling_policy` - Creates or updates an automatic scaling policy for a core instance group or task instance group in an Amazon EMR cluster. The automatic scaling policy defines how an instance group dynamically adds and terminates EC2 instances in response to the value of a CloudWatch metric.
* `put_auto_termination_policy` - Creates or updates an auto-termination policy for an Amazon EMR cluster. An auto-termination policy defines the amount of idle time in seconds after which a cluster automatically terminates. For alternative cluster termination options, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-termination.html">Control cluster termination</a>.
* `put_block_public_access_configuration` - Creates or updates an Amazon EMR block public access configuration for your Amazon Web Services account in the current Region. For more information see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/configure-block-public-access.html">Configure Block Public Access for Amazon EMR</a> in the <i>Amazon EMR Management Guide</i>.
* `put_managed_scaling_policy` - Creates or updates a managed scaling policy for an Amazon EMR cluster. The managed scaling policy defines the limits for resources, such as EC2 instances that can be added or terminated from a cluster. The policy only applies to the core and task nodes. The master node cannot be scaled after initial configuration. 
* `remove_auto_scaling_policy` - Removes an automatic scaling policy from a specified instance group within an EMR cluster.
* `remove_auto_termination_policy` - Removes an auto-termination policy from an Amazon EMR cluster.
* `remove_managed_scaling_policy` -  Removes a managed scaling policy from a specified EMR cluster. 
* `remove_tags` - <p>Removes tags from an Amazon EMR resource, such as a cluster or Amazon EMR Studio. Tags make it easier to associate resources in various ways, such as grouping clusters to track your Amazon EMR resource allocation costs. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-tags.html">Tag Clusters</a>. </p> <p>The following example removes the stack tag with value Prod from a cluster:</p>
* `run_job_flow` - <p>RunJobFlow creates and starts running a new cluster (job flow). The cluster runs the steps specified. After the steps complete, the cluster stops and the HDFS partition is lost. To prevent loss of data, configure the last step of the job flow to store results in Amazon S3. If the <a>JobFlowInstancesConfig</a> <code>KeepJobFlowAliveWhenNoSteps</code> parameter is set to <code>TRUE</code>, the cluster transitions to the WAITING state rather than shutting down after the steps have completed. </p> <p>For additional protection, you can set the <a>JobFlowInstancesConfig</a> <code>TerminationProtected</code> parameter to <code>TRUE</code> to lock the cluster and prevent it from being terminated by API call, user intervention, or in the event of a job flow error.</p> <p>A maximum of 256 steps are allowed in each job flow.</p> <p>If your cluster is long-running (such as a Hive data warehouse) or complex, you may require more than 256 steps to process your data. You can bypass the 256-step limitation in various ways, including using the SSH shell to connect to the master node and submitting queries directly to the software running on the master node, such as Hive and Hadoop. For more information on how to do this, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/AddMoreThan256Steps.html">Add More than 256 Steps to a Cluster</a> in the <i>Amazon EMR Management Guide</i>.</p> <p>For long running clusters, we recommend that you periodically store your results.</p> <note> <p>The instance fleets configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions. The RunJobFlow request can contain InstanceFleets parameters or InstanceGroups parameters, but not both.</p> </note>
* `set_termination_protection` - <p>SetTerminationProtection locks a cluster (job flow) so the EC2 instances in the cluster cannot be terminated by user intervention, an API call, or in the event of a job-flow error. The cluster still terminates upon successful completion of the job flow. Calling <code>SetTerminationProtection</code> on a cluster is similar to calling the Amazon EC2 <code>DisableAPITermination</code> API on all EC2 instances in a cluster.</p> <p> <code>SetTerminationProtection</code> is used to prevent accidental termination of a cluster and to ensure that in the event of an error, the instances persist so that you can recover any data stored in their ephemeral instance storage.</p> <p> To terminate a cluster that has been locked by setting <code>SetTerminationProtection</code> to <code>true</code>, you must first unlock the job flow by a subsequent call to <code>SetTerminationProtection</code> in which you set the value to <code>false</code>. </p> <p> For more information, see<a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/UsingEMR_TerminationProtection.html">Managing Cluster Termination</a> in the <i>Amazon EMR Management Guide</i>. </p>
* `set_visible_to_all_users` - <p>Sets the <a>Cluster$VisibleToAllUsers</a> value for an EMR cluster. When <code>true</code>, IAM principals in the Amazon Web Services account can perform EMR cluster actions that their IAM policies allow. When <code>false</code>, only the IAM principal that created the cluster and the Amazon Web Services account root user can perform EMR actions on the cluster, regardless of IAM permissions policies attached to other IAM principals.</p> <p>This action works on running clusters. When you create a cluster, use the <a>RunJobFlowInput$VisibleToAllUsers</a> parameter.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/security_iam_emr-with-iam.html#security_set_visible_to_all_users">Understanding the EMR Cluster VisibleToAllUsers Setting</a> in the <i>Amazon EMRManagement Guide</i>.</p>
* `start_notebook_execution` - Starts a notebook execution.
* `stop_notebook_execution` - Stops a notebook execution.
* `terminate_job_flows` - <p>TerminateJobFlows shuts a list of clusters (job flows) down. When a job flow is shut down, any step not yet completed is canceled and the EC2 instances on which the cluster is running are stopped. Any log files not already saved are uploaded to Amazon S3 if a LogUri was specified when the cluster was created.</p> <p>The maximum number of clusters allowed is 10. The call to <code>TerminateJobFlows</code> is asynchronous. Depending on the configuration of the cluster, it may take up to 1-5 minutes for the cluster to completely terminate and release allocated resources, such as Amazon EC2 instances.</p>
* `update_studio` - Updates an Amazon EMR Studio configuration, including attributes such as name, description, and subnets.
* `update_studio_session_mapping` - Updates the session policy attached to the user or group for the specified Amazon EMR Studio.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
