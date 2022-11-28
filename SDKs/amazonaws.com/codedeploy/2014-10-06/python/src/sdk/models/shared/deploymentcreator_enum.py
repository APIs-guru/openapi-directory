from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum

class DeploymentCreatorEnum(str, Enum):
    USER = "user"
    AUTOSCALING = "autoscaling"
    CODE_DEPLOY_ROLLBACK = "codeDeployRollback"
    CODE_DEPLOY = "CodeDeploy"
    CODE_DEPLOY_AUTO_UPDATE = "CodeDeployAutoUpdate"
    CLOUD_FORMATION = "CloudFormation"
    CLOUD_FORMATION_ROLLBACK = "CloudFormationRollback"

