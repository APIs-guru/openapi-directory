from dataclasses import dataclass, field



@dataclass
class ProcessType:
    r"""ProcessType
    <p>Describes a process type.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-suspend-resume-processes.html#process-types\">Scaling processes</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
    """
    
    process_name: str = field()
    
